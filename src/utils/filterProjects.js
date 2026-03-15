/**
 * Filters projects by the active tab category.
 *
 * @param {Array} projects - Array of project objects with a `category` field
 * @param {string} activeTab - The category to filter by ('devops' | 'ai')
 * @returns {Array} A new array containing only projects matching the active tab
 */
export default function filterProjects(projects, activeTab) {
  return projects.filter((project) => project.category === activeTab);
}
