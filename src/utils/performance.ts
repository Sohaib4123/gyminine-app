// Performance monitoring utilities for 4GB RAM devices
import React from "react";
import { Image, Easing } from "react-native";

export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private renderTimes: Map<string, number> = new Map();
  private memoryWarningThreshold = 80; // MB
  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  // Track component render time
  startRender(componentName: string): void {
    this.renderTimes.set(componentName, performance.now());
  }

  endRender(componentName: string): number {
    const startTime = this.renderTimes.get(componentName);
    if (!startTime) return 0;

    const renderTime = performance.now() - startTime;
    this.renderTimes.delete(componentName);

    if (__DEV__ && renderTime > 16.67) {
      // 60fps threshold
      console.warn(
        `⚠️ Slow render detected: ${componentName} took ${renderTime.toFixed(
          2
        )}ms`
      );
    }

    return renderTime;
  }

  // Memory pressure detection for low-end devices
  checkMemoryPressure(): void {
    if (__DEV__) {
      // In development, simulate memory monitoring
      const memoryUsage = Math.random() * 100;
      if (memoryUsage > this.memoryWarningThreshold) {
        console.warn(
          `🔥 High memory usage detected: ${memoryUsage.toFixed(1)}MB`
        );
      }
    }
  }

  // Debounce function for performance-critical operations
  static debounce<T extends (...args: any[]) => any>(
    func: T,
    delay: number
  ): (...args: Parameters<T>) => void {
    let timeoutId: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(null, args), delay);
    };
  }

  // Throttle function for scroll events
  static throttle<T extends (...args: any[]) => any>(
    func: T,
    delay: number
  ): (...args: Parameters<T>) => void {
    let lastCall = 0;
    return (...args: Parameters<T>) => {
      const now = performance.now();
      if (now - lastCall >= delay) {
        lastCall = now;
        func.apply(null, args);
      }
    };
  }
}

// Performance HOC for React components
export function withPerformanceMonitoring<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  componentName: string
) {
  const PerformanceWrapper = React.memo((props: P) => {
    const monitor = PerformanceMonitor.getInstance();

    React.useEffect(() => {
      monitor.startRender(componentName);
      return () => {
        monitor.endRender(componentName);
      };
    });

    return React.createElement(WrappedComponent, props);
  });

  PerformanceWrapper.displayName = `withPerformanceMonitoring(${componentName})`;
  return PerformanceWrapper;
}

// Image optimization helpers
export const ImageOptimizer = {
  // Get optimized image props for different screen densities
  getOptimizedImageProps: (uri: string, width: number, height: number) => ({
    source: { uri },
    style: { width, height },
    resizeMode: "cover" as const,
    fadeDuration: 200,
    progressiveRenderingEnabled: true,
    // For network images, add cache control
    ...(uri.startsWith("http") && {
      loadingIndicatorSource: require("../assets/images/logo.png"),
      defaultSource: require("../assets/images/logo.png"),
    }),
  }),

  // Preload critical images
  preloadImages: (imageUris: string[]) => {
    imageUris.forEach((uri) => {
      if (uri.startsWith("http")) {
        Image.prefetch(uri).catch(console.warn);
      }
    });
  },
};

// Animation performance helpers
export const AnimationHelper = {
  // Standard animation config for consistent performance
  getStandardConfig: (duration: number = 200) => ({
    duration,
    easing: Easing.out(Easing.quad),
  }),

  // Reduced animation config for low-end devices
  getReducedMotionConfig: (duration: number = 100) => ({
    duration,
    easing: Easing.linear,
  }),

  // Check if device supports high-performance animations
  supportsHighPerformanceAnimations: () => {
    // Simple heuristic - could be enhanced with device detection
    return true; // For now, assume all devices can handle optimized animations
  },
};
