const datamethod = ['body', 'params', 'query'];
const validation = (schema) => {
    return (req, res, next) => {
        const errorarr = [];
        datamethod.forEach((key) => {
            if (schema[key]) {
                const validationresult = schema[key].validate(req[key]);
                if (validationresult.error) {
                    errorarr.push(validationresult.error.details[0]);
                }
            }
        })

        if (errorarr.length) {
            res.json({ message: 'validation error', error: errorarr })
        } else {
            next();
        }

    }
}
module.exports = validation;