export function errorOnlyPromisify(fn, ctx) {
    return (...args) => {
        return new Promise((resolve, reject) => {
            fn.apply(ctx, [...args, function (err) {
                resolve(err);
            }.bind(ctx)]);
        });
    };
}

export function errorRejectPromisify(fn, ctx) {
    return (...args) => {
        return new Promise((resolve, reject) => {
            fn.apply(ctx, [...args, function (err, ...res) {
                if (res.length <= 1) {
                    err ? reject(err) : resolve(...res);
                    return;
                }
                err ? reject(err) : resolve(res);
            }.bind(ctx)]);
        });
    };
}

export function promisify(fn, ctx) {
    return (...args) => {
        return new Promise(resolve => {
            fn.apply(ctx, [...args, function (...res) {
                if (res.length <= 1) {
                    resolve(...res);
                    return;
                }
                resolve(res);
            }.bind(ctx)]);
        });
    };
}
