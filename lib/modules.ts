import fs from 'fs';
import path from 'path';

type Chapter = {
  name: string;
  slug: string;
};

type ModuleData = {
  title: string;
  description: string;
  slug: string;
  image: string;
  chapters: Chapter[];
};

export async function saveModule(moduleData: ModuleData) {
  try {
    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'modules.json');

    // Create data directory if it doesn't exist
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Define the type for modules
    let modules: Record<string, ModuleData> = {};
    
    // Read existing data or initialize new object
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      try {
        modules = JSON.parse(fileContent) as Record<string, ModuleData>;
      } catch (error) {
        console.error('Error parsing existing modules:', error);
        modules = {};
      }
    }

    // Add new module data
    modules[moduleData.slug] = {
      title: moduleData.title,
      description: moduleData.description,
      slug: moduleData.slug,
      image: moduleData.image,
      chapters: moduleData.chapters,
    };

    // Write updated data
    fs.writeFileSync(filePath, JSON.stringify(modules, null, 2), 'utf-8');
    return true;
  } catch (error) {
    console.error('Error saving module:', error);
    throw new Error(`Failed to save module: ${(error as Error).message}`);
  }
}
