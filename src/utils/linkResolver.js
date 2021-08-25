exports.linkResolver = function linkResolver({ node: doc }) {
  return () => {
    if (doc.uid === 'home') return `/`;

    return `/${doc.uid}`;
  };
};
