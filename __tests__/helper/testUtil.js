import jscodeshift from 'jscodeshift'
export const jscodeshiftApi = {
  jscodeshift,
  stats: () => {},
};

export function transform(file, fn) {
  const j = jscodeshiftApi.jscodeshift;
  const fileSource = (typeof file === 'string') ? file: file.source
  const root = j(fileSource);
  fn(j, root);
  return root.toSource();
}
