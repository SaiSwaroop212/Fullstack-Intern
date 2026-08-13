function concurrencyLimiter(tasks, limit) {

    let index = 0;
    let running = 0;
    let completed = 0;
    const results = [];

    return new Promise((resolve, reject) => {

        function run() {

            if (completed === tasks.length) {
                resolve(results);
                return;
            }

            while (running < limit && index < tasks.length) {

                const current = index;

                index++;
                running++;

                tasks[current]()
                    .then((result) => {

                        results[current] = result;

                        running--;
                        completed++;

                        run();

                    })
                    .catch(reject);
            }
        }

        run();
    });
}

module.exports = concurrencyLimiter;