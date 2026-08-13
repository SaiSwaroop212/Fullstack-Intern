class MyPromise {
    constructor(executor) {
        this.state = "pending";
        this.value = undefined;
        this.reason = undefined;

        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];

        const fulfill = (value) => {
            if (this.state !== "pending") {
                return;
            }

            this.state = "fulfilled";
            this.value = value;

            const callbacks = this.onFulfilledCallbacks;

            this.onFulfilledCallbacks = [];
            this.onRejectedCallbacks = [];

            callbacks.forEach((callback) => {
                queueMicrotask(callback);
            });
        };

        const rejectInternal = (reason) => {
            if (this.state !== "pending") {
                return;
            }

            this.state = "rejected";
            this.reason = reason;

            const callbacks = this.onRejectedCallbacks;

            this.onFulfilledCallbacks = [];
            this.onFulfilledCallbacks = [];

            callbacks.forEach((callback) => {
                queueMicrotask(callback);
            });
        };

        const resolve = (value) => {
            // Prevent self-resolution
            if (value === this) {
                rejectInternal(
                    new TypeError("Promise cannot resolve itself")
                );
                return;
            }

            // Handle Promise / thenable
            if (
                value !== null &&
                (typeof value === "object" ||
                    typeof value === "function")
            ) {
                let then;

                try {
                    then = value.then;
                } catch (error) {
                    rejectInternal(error);
                    return;
                }

                if (typeof then === "function") {
                    let called = false;

                    try {
                        then.call(
                            value,

                            (result) => {
                                if (called) {
                                    return;
                                }

                                called = true;
                                resolve(result);
                            },

                            (reason) => {
                                if (called) {
                                    return;
                                }

                                called = true;
                                rejectInternal(reason);
                            }
                        );
                    } catch (error) {
                        if (!called) {
                            called = true;
                            rejectInternal(error);
                        }
                    }

                    return;
                }
            }

            fulfill(value);
        };

        const reject = (reason) => {
            rejectInternal(reason);
        };

        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    then(onFulfilled, onRejected) {
        const parent = this;

        const child = new MyPromise((resolve, reject) => {

            const handleFulfilled = () => {
                try {
                    if (typeof onFulfilled !== "function") {
                        resolve(parent.value);
                        return;
                    }

                    const result = onFulfilled(parent.value);

                    resolve(result);

                } catch (error) {
                    reject(error);
                }
            };

            const handleRejected = () => {
                try {
                    if (typeof onRejected !== "function") {
                        reject(parent.reason);
                        return;
                    }

                    const result = onRejected(parent.reason);

                    resolve(result);

                } catch (error) {
                    reject(error);
                }
            };

            if (parent.state === "fulfilled") {
                queueMicrotask(handleFulfilled);

            } else if (parent.state === "rejected") {
                queueMicrotask(handleRejected);

            } else {
                parent.onFulfilledCallbacks.push(handleFulfilled);
                parent.onRejectedCallbacks.push(handleRejected);
            }
        });

        return child;
    }

    catch(onRejected) {
        return this.then(undefined, onRejected);
    }

    finally(onFinally) {
        return this.then(
            (value) => {
                return MyPromise
                    .resolve(onFinally())
                    .then(() => value);
            },

            (reason) => {
                return MyPromise
                    .resolve(onFinally())
                    .then(() => {
                        throw reason;
                    });
            }
        );
    }

    static resolve(value) {
        if (value instanceof MyPromise) {
            return value;
        }

        return new MyPromise((resolve) => {
            resolve(value);
        });
    }

    static reject(reason) {
        return new MyPromise((resolve, reject) => {
            reject(reason);
        });
    }
}

module.exports = MyPromise;