"use client";

import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { z } from 'zod';
import { ModuleForm } from '@/components/ModuleForm';

export default function ModulesItemAddition() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
        Add New Module Item
      </h1>
      <ModuleForm />
    </div>
  );
}