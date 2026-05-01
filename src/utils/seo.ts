export const updatePageTitle = (pageTitle: string) => {
  document.title = `Fluent Future Institute | ${pageTitle}`;
};

export const updateMetaDescription = (description?: string) => {
  const metaDescription = document.querySelector('meta[name="description"]');
  const defaultDescription = 'Professional Interpreter and ESL training led by Hanane Benalia, MBA.';

  if (metaDescription) {
    metaDescription.setAttribute('content', description || defaultDescription);
  }
};
