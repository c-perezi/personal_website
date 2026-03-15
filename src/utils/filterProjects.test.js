import { describe, it, expect } from 'vitest';
import filterProjects from './filterProjects';

const sampleProjects = [
  { id: 'p1', title: 'Terraform Platform', category: 'devops', tags: ['Terraform'] },
  { id: 'p2', title: 'CI/CD Pipeline', category: 'devops', tags: ['ArgoCD'] },
  { id: 'p3', title: 'ML Serving', category: 'ai', tags: ['SageMaker'] },
  { id: 'p4', title: 'Log Anomaly', category: 'ai', tags: ['TensorFlow'] },
];

describe('filterProjects', () => {
  it('returns only devops projects when activeTab is "devops"', () => {
    const result = filterProjects(sampleProjects, 'devops');
    expect(result).toHaveLength(2);
    expect(result.every((p) => p.category === 'devops')).toBe(true);
  });

  it('returns only ai projects when activeTab is "ai"', () => {
    const result = filterProjects(sampleProjects, 'ai');
    expect(result).toHaveLength(2);
    expect(result.every((p) => p.category === 'ai')).toBe(true);
  });

  it('returns an empty array when no projects match', () => {
    const result = filterProjects(sampleProjects, 'other');
    expect(result).toEqual([]);
  });

  it('returns an empty array when given an empty projects array', () => {
    const result = filterProjects([], 'devops');
    expect(result).toEqual([]);
  });

  it('does not mutate the original array', () => {
    const original = [...sampleProjects];
    filterProjects(sampleProjects, 'devops');
    expect(sampleProjects).toEqual(original);
  });

  it('returns all projects when all match the active tab', () => {
    const allDevops = [
      { id: 'p1', category: 'devops' },
      { id: 'p2', category: 'devops' },
    ];
    const result = filterProjects(allDevops, 'devops');
    expect(result).toHaveLength(2);
  });
});
