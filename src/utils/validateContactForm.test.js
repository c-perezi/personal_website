import { describe, it, expect } from 'vitest';
import validateContactForm from './validateContactForm';

describe('validateContactForm', () => {
  it('returns valid for correct inputs', () => {
    const result = validateContactForm({
      name: 'Jane',
      email: 'jane@example.com',
      message: 'Hello there, this is a message.',
    });
    expect(result).toEqual({ valid: true, errors: {} });
  });

  it('returns error when name is missing', () => {
    const result = validateContactForm({
      name: '',
      email: 'jane@example.com',
      message: 'Hello there, this is a message.',
    });
    expect(result.valid).toBe(false);
    expect(result.errors.name).toBeDefined();
  });

  it('returns error when name is too short', () => {
    const result = validateContactForm({
      name: 'A',
      email: 'jane@example.com',
      message: 'Hello there, this is a message.',
    });
    expect(result.valid).toBe(false);
    expect(result.errors.name).toBeDefined();
  });

  it('accepts name with exactly 2 characters', () => {
    const result = validateContactForm({
      name: 'Jo',
      email: 'jo@example.com',
      message: 'This is a valid message.',
    });
    expect(result.valid).toBe(true);
    expect(result.errors).toEqual({});
  });

  it('returns error when email is missing', () => {
    const result = validateContactForm({
      name: 'Jane',
      email: '',
      message: 'Hello there, this is a message.',
    });
    expect(result.valid).toBe(false);
    expect(result.errors.email).toBeDefined();
  });

  it('returns error for invalid email format', () => {
    const result = validateContactForm({
      name: 'Jane',
      email: 'not-an-email',
      message: 'Hello there, this is a message.',
    });
    expect(result.valid).toBe(false);
    expect(result.errors.email).toBeDefined();
  });

  it('returns error when message is missing', () => {
    const result = validateContactForm({
      name: 'Jane',
      email: 'jane@example.com',
      message: '',
    });
    expect(result.valid).toBe(false);
    expect(result.errors.message).toBeDefined();
  });

  it('returns error when message is too short', () => {
    const result = validateContactForm({
      name: 'Jane',
      email: 'jane@example.com',
      message: 'Short',
    });
    expect(result.valid).toBe(false);
    expect(result.errors.message).toBeDefined();
  });

  it('accepts message with exactly 10 characters', () => {
    const result = validateContactForm({
      name: 'Jane',
      email: 'jane@example.com',
      message: '1234567890',
    });
    expect(result.valid).toBe(true);
    expect(result.errors).toEqual({});
  });

  it('returns multiple errors when all fields are invalid', () => {
    const result = validateContactForm({
      name: '',
      email: 'bad',
      message: 'short',
    });
    expect(result.valid).toBe(false);
    expect(result.errors.name).toBeDefined();
    expect(result.errors.email).toBeDefined();
    expect(result.errors.message).toBeDefined();
  });

  it('is a pure function with no side effects', () => {
    const input = { name: 'Jane', email: 'jane@example.com', message: 'Hello world!!' };
    const inputCopy = { ...input };
    validateContactForm(input);
    expect(input).toEqual(inputCopy);
  });
});
