import validate from './validate'

// 验证号码格式
export const CHECK_PHONE = (rule, value, callback) => {
  const check = validate({ label: rule.name, value, rules: ['phone','notnull'],type:'input' })
  if (!check.result) {
    callback(new Error(check.message))
  } else {
    callback()
  }
}
// 校验数字和字母
export const CHECKString = (rule, value, callback) => {
  let rules = ['string'];
  if(rule.required) rules.push('notnull');
  if(rule.conditions) rules.push('length')
  const check = validate({ label: rule.name, value, rules,conditions:rule.conditions||[],type:'input' })
  if (!check.result) {
    callback(new Error(check.message))
  } else {
    callback()
  }
}

// 验证正整数
export const CHECK_Integer = (rule, value, callback) => {
  const check = validate({ label: rule.name, value, rules: ['integer'] })
  if (!check.result) {
    callback(new Error(check.message))
  } else {
    callback()
  }
}

// 验证数字
export const CHECK_NumberIn = (rule, value, callback) => {
  console.log(rule,'rule')
  const check = validate({ label: rule.name, value, rules: ['numberin'],type:rule.type })
  if (!check.result) {
    callback(new Error(check.message))
  } else {
    callback()
  }
}
// 验证数字，且最多保留两位小数
export const CHECK_Float = (rule, value, callback) => {
  let rules = ['float'];
  if(rule.required) rules.push('notnull');
  const check = validate({ label: rule.name, value, rules ,type:rule.type})
  if (!check.result) {
    callback(new Error(check.message))
  } else {
    callback()
  }
}

// 检测邮箱格式以及不能为空
export const CHECK_NOTNULL = (rule, value, callback) => {
  const check = validate({ label: rule.name, value, rules: ['notnull'],type:rule.type })
  if (!check.result) {
    callback(new Error(check.message))
  } else {
    callback()
  }
}
