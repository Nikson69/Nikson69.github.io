// types/gray-matter.d.ts
declare module 'gray-matter' {
    interface GrayMatterResult<T = any> {
      data: T;
      content: string;
      isEmpty: boolean;
      excerpt: string;
      orig: string;
      engine: string;
    }
  
    function grayMatter<T = any>(
      source: string,
      options?: grayMatter.GrayMatterOptions,
    ): GrayMatterResult<T>;
  
    namespace grayMatter {
      interface GrayMatterOptions {
        excerpt?: boolean | string | (() => void);
        excerpt_separator?: string;
        engines?: Record<string, (s: string) => void>;
        language?: string;
      }
  
      function test(source: string): boolean;
    }
  
    export = grayMatter;
  }
  