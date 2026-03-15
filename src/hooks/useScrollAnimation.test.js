import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useScrollAnimation from './useScrollAnimation';

describe('useScrollAnimation', () => {
  let mockObserve;
  let mockUnobserve;
  let mockDisconnect;
  let observerCallback;
  let originalIntersectionObserver;

  beforeEach(() => {
    mockObserve = vi.fn();
    mockUnobserve = vi.fn();
    mockDisconnect = vi.fn();
    originalIntersectionObserver = globalThis.IntersectionObserver;

    globalThis.IntersectionObserver = vi.fn(function (callback) {
      observerCallback = callback;
      this.observe = mockObserve;
      this.unobserve = mockUnobserve;
      this.disconnect = mockDisconnect;
    });
  });

  afterEach(() => {
    globalThis.IntersectionObserver = originalIntersectionObserver;
  });

  it('returns [ref, isVisible] tuple with isVisible initially false', () => {
    const { result } = renderHook(() => useScrollAnimation());
    const [ref, isVisible] = result.current;
    expect(ref).toHaveProperty('current');
    expect(isVisible).toBe(false);
  });

  it('uses default threshold of 0.1', () => {
    const div = document.createElement('div');
    renderHook(() => {
      const hook = useScrollAnimation();
      hook[0].current = div;
      return hook;
    });

    expect(globalThis.IntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      { threshold: 0.1 }
    );
  });

  it('accepts custom threshold option', () => {
    const div = document.createElement('div');
    renderHook(() => {
      const hook = useScrollAnimation({ threshold: 0.5, triggerOnce: false });
      hook[0].current = div;
      return hook;
    });

    expect(globalThis.IntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      { threshold: 0.5 }
    );
  });

  it('sets isVisible to true when element enters viewport', () => {
    const div = document.createElement('div');

    const { result } = renderHook(() => {
      const hook = useScrollAnimation();
      hook[0].current = div;
      return hook;
    });

    act(() => {
      observerCallback([{ isIntersecting: true, target: div }]);
    });

    expect(result.current[1]).toBe(true);
  });

  it('unobserves after first intersection when triggerOnce is true', () => {
    const div = document.createElement('div');

    renderHook(() => {
      const hook = useScrollAnimation({ triggerOnce: true });
      hook[0].current = div;
      return hook;
    });

    act(() => {
      observerCallback([{ isIntersecting: true, target: div }]);
    });

    expect(mockUnobserve).toHaveBeenCalledWith(div);
  });

  it('does not unobserve when triggerOnce is false', () => {
    const div = document.createElement('div');

    renderHook(() => {
      const hook = useScrollAnimation({ triggerOnce: false });
      hook[0].current = div;
      return hook;
    });

    act(() => {
      observerCallback([{ isIntersecting: true, target: div }]);
    });

    expect(mockUnobserve).not.toHaveBeenCalled();
  });

  it('toggles isVisible on enter/exit when triggerOnce is false', () => {
    const div = document.createElement('div');

    const { result } = renderHook(() => {
      const hook = useScrollAnimation({ triggerOnce: false });
      hook[0].current = div;
      return hook;
    });

    act(() => {
      observerCallback([{ isIntersecting: true, target: div }]);
    });
    expect(result.current[1]).toBe(true);

    act(() => {
      observerCallback([{ isIntersecting: false, target: div }]);
    });
    expect(result.current[1]).toBe(false);
  });

  it('keeps isVisible true after triggerOnce fires even on exit', () => {
    const div = document.createElement('div');

    const { result } = renderHook(() => {
      const hook = useScrollAnimation({ triggerOnce: true });
      hook[0].current = div;
      return hook;
    });

    act(() => {
      observerCallback([{ isIntersecting: true, target: div }]);
    });
    expect(result.current[1]).toBe(true);

    // Element already unobserved, but simulating exit shouldn't change state
    act(() => {
      observerCallback([{ isIntersecting: false, target: div }]);
    });
    expect(result.current[1]).toBe(true);
  });

  it('disconnects observer on unmount', () => {
    const div = document.createElement('div');

    const { unmount } = renderHook(() => {
      const hook = useScrollAnimation();
      hook[0].current = div;
      return hook;
    });

    unmount();
    expect(mockDisconnect).toHaveBeenCalled();
  });

  it('returns [ref, true] when IntersectionObserver is unsupported', () => {
    globalThis.IntersectionObserver = undefined;

    const { result } = renderHook(() => useScrollAnimation());
    const [ref, isVisible] = result.current;

    expect(ref).toHaveProperty('current');
    expect(isVisible).toBe(true);
  });
});
