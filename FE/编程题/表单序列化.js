function serializeForm(form) {
  if (!form || form.nodeName.toUpperCase() !== 'FORM') {
    return;
  }

  var result = [],
    field,
    fieldName,
    fieldType;

  var els = form.children;

  for (var i = 0, len = els.length; i < len; i++) {
    field = els[i];
    fieldName = field.name;
    fieldType = field.type;
    if (field.disabled || !field) {
      continue;
    }

    switch (fieldType) {
      case 'text':
      case 'password':
      case 'hidden':
      case 'textarea':
        result.push(fieldName + '=' + encodeURIComponent(field.value));
        break;
      case 'radio':
      case 'checkbox':
        field.checked && result.push(fieldName + '=' + encodeURIComponent(field.value));
        break;

      case 'select-one':
      case 'select-multiple':
        for (var j = 0, j_len = field.options.length; i < j_len; j++) {
          if (field.options[j].selected) {
            result.push(fieldName + '=' + encodeURIComponent(field.options[j].value || field.options[j].text));
          }
        }
        break;
      case 'file':
      case 'submit':
        break;

      default:
        break;
    }
  }

}