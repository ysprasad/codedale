import fs from 'fs';
import path from 'path';

export async function saveModule(moduleData: any) {
  try {
    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'modules.json');

    // Create data directory if it doesn't exist
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Read existing data or create new object
    let modules = {};
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      try {
        modules = JSON.parse(fileContent);
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
    throw new Error(`Failed to save module: ${error.message}`);
  }
}