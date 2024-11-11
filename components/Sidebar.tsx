"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Code2, BookOpen, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <div className="flex flex-col h-full">
        <div className="p-6">
          <div className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-white">
            <Code2 className="h-6 w-6" />
            <span>Codedale</span>
          </div>
        </div>
        
        <nav className="flex-1 px-4">
          <ul className="space-y-2">
            <li>
              <Link
                href="/modulesitemaddition"
                className={cn(
                  "flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",
                  pathname === '/modulesitemaddition' && "bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400"
                )}
              >
                <BookOpen className="h-5 w-5" />
                <span>ModulesItemAddition</span>
                <ChevronRight className="h-4 w-4 ml-auto" />
              </Link>
            </li>
            <li>
              <Link
                href="/modulesaddition"
                className={cn(
                  "flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",
                  pathname === '/modulesaddition' && "bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400"
                )}
              >
                <BookOpen className="h-5 w-5" />
                <span>ModulesAddition</span>
                <ChevronRight className="h-4 w-4 ml-auto" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}