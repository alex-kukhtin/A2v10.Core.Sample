define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const template = {
        properties: {},
        validators: {
            'Product.Name': '@[Error.Empty]'
        },
        commands: {}
    };
    exports.default = template;
});
