module.exports = {
    "defaultSeverity": "error",                 //默认报告为错误。可选值：warning、error
    "processors": ["stylelint-processor-html"],
    "extends": ["stylelint-config-standard"],   //加载扩展规则。需要 npm install 在项目目录或父级下
    "rules": {                                  //规则配置，会覆盖 extends 中相同的配置项
        "no-empty-source": null,
        "rule-empty-line-before": "never-multi-line",
        "indentation": null,
        "comment-whitespace-inside": "always",
        "selector-list-comma-newline-after": "always-multi-line",
        "no-descending-specificity": null,
        "rule-empty-line-before": null
    }
}
