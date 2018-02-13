import { transform as babel } from '@babel/core';
import { transform } from 'ejs';
import { getOptions } from 'loader-utils';

export default function loader(source, map, meta) {
  const options = getOptions(this);
  const template = transform(source, Object.assign({}, options, {inputSourceMap: map}));
  
  if (template.map === null) {
    template.map = undefined;
  }
  
  this.callback(null, template.code, template.map, meta);
  return;
};