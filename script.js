const STORAGE_KEY = 'ryan-xie-portfolio-data-v6';
const TYPOGRAPHY_KEY = 'ryan-xie-typography-v1';
const SESSION_KEY = 'ryan-xie-editor-unlocked';
const EDITOR_KEY_HASH = 'f9e050209b00b74f4bd920c05a86bc77c3ab0d1f5c8754c5b075a967c1077d94';
const MEDIA_DB_NAME = 'ryan-xie-portfolio-media';
const MEDIA_STORE_NAME = 'images';
const MEDIA_PREFIX = 'local-image:';

const defaultTypography = {
  siteFont: 'Arial, Helvetica, sans-serif',
  titleFont: 'Arial, Helvetica, sans-serif',
  navFont: 'Arial, Helvetica, sans-serif',
  bodySize: 14,
  logoSize: 34,
  navSize: 13,
  projectTitleSize: 21,
  detailTitleSize: 30,
  titleWeight: 400,
  navWeight: 400,
  customFonts: []
};

const defaultProjects = [
  {
    "id": "eva-annie",
    "title": "EVA ANNIE",
    "category": "story-art",
    "image": "assets/eva-annie.jpg",
    "description": "Story-driven visual development work with cinematic staging, color, and mood.",
    "gallery": [
      "assets/editor-media/1785032837765-5facaceb-4501-4c62-b5c0-60b857e3fbff.jpg",
      "assets/editor-media/1785032837752-fb185a08-d2aa-4ce7-9342-3fd093bc3d6c.jpg",
      "assets/gallery/eva-annie/03.png",
      "assets/gallery/eva-annie/04.png",
      "assets/gallery/eva-annie/05.jpg",
      "assets/editor-media/1785030695957-6d671f47-930f-458d-a9ca-931e1166a11d.png",
      "assets/editor-media/1785032689829-d896ca69-c664-4a0b-a8a9-096ca4e41d80.jpg",
      "assets/gallery/eva-annie/08.jpg",
      "assets/editor-media/1785030750010-e824fd55-dae9-48bb-b439-c47472e05197.png",
      "assets/editor-media/1785030812721-41b4fd65-84c2-4f4e-b480-6aae597c0451.jpg",
      "assets/editor-media/1785030763545-934bd97e-7885-4203-8e92-3b987ce2387f.jpg",
      "assets/editor-media/1785032753998-d41cd756-f885-4dbe-bf68-aa1420054b0c.jpg",
      "assets/editor-media/1785032753986-3a858e28-6f5e-4617-9e06-02f236dd40e3.jpg",
      "assets/editor-media/1785032791172-2a5d9f46-27a8-4e41-a0af-010797687f7a.jpg",
      "assets/gallery/eva-annie/12.jpg",
      "assets/gallery/eva-annie/13.jpg",
      "assets/gallery/eva-annie/15.jpg",
      "assets/gallery/eva-annie/17.jpg",
      "assets/gallery/eva-annie/18.jpg",
      "assets/gallery/eva-annie/28.png",
      "assets/gallery/eva-annie/29.jpg"
    ]
  },
  {
    "id": "story-backgrounds",
    "title": "STORY BACKGROUNDS",
    "category": "story-art",
    "image": "assets/story-backgrounds.jpg",
    "description": "Background paintings and environment studies for narrative sequences.",
    "gallery": [
      "assets/editor-media/1785031378772-310c6150-6227-4ee9-aaf5-655bed1060df.png",
      "assets/editor-media/1785031395520-80514b41-36c1-42c9-9ae7-b2784e7fde58.png",
      "assets/editor-media/1785031395532-55527467-0baf-4920-9f01-8ef7538cbd12.png",
      "assets/editor-media/1785032906814-ae5a60ec-f147-4a45-82aa-f9e2fe8f201a.jpg",
      "assets/editor-media/1785032906800-1b05c3c2-fb05-4d14-8198-7c2ffb17f432.jpg",
      "assets/editor-media/1785032906814-71426d5c-4894-4373-a54a-454a53b48b5c.jpg",
      "assets/editor-media/1785032906815-a55f8dae-de26-4f7a-a2ec-6db6b6c048f8.jpg",
      "assets/editor-media/1785032906815-aa34a9c3-2458-4070-9560-7ae721f431dd.jpg",
      "assets/editor-media/1785032931184-0849f5af-0ff3-4340-8f70-99626e7bce6c.png",
      "assets/editor-media/1785032937749-78c530ab-241c-4499-b47d-8eb5c7b3a412.png",
      "assets/editor-media/1785032940241-f1f8ee0b-2e46-425d-a263-34b7241b0f82.png",
      "assets/editor-media/1785032942432-e9d9bbca-7982-4822-ad99-2af74692af94.png",
      "assets/gallery/story-backgrounds/18.jpg",
      "assets/gallery/story-backgrounds/19.gif"
    ]
  },
  {
    "id": "rome",
    "title": "ROME",
    "category": "personal-projects",
    "image": "assets/rome.jpg",
    "description": "Personal travel-inspired visual study focused on atmosphere, architecture, and light.",
    "gallery": [
      "assets/editor-media/1785032977029-c2181384-d85d-469d-859b-210caac362b8.jpg",
      "assets/editor-media/1785032978527-dd1c30b3-d1c2-4224-935b-f176e8fd55c8.jpg",
      "assets/editor-media/1785032980376-ea301321-c1fb-4177-a18f-39704f9c9d29.jpg",
      "assets/editor-media/1785032981963-f5aaa6c6-528a-464b-aeb3-0dbdcb2ec8f3.jpg",
      "assets/gallery/rome/13.png",
      "assets/gallery/rome/14.png"
    ]
  },
  {
    "id": "sketch-book-project",
    "title": "SKETCH BOOK",
    "category": "sketch-book",
    "image": "assets/sketch-book.png",
    "description": "Sketchbook pages, drawings, studies, and exploratory observations.",
    "gallery": [
      "assets/gallery/sketch-book-project/01.jpg",
      "assets/gallery/sketch-book-project/02.jpg",
      "assets/gallery/sketch-book-project/03.jpg",
      "assets/gallery/sketch-book-project/04.jpg",
      "assets/gallery/sketch-book-project/05.jpg",
      "assets/gallery/sketch-book-project/06.png",
      "assets/gallery/sketch-book-project/07.jpg",
      "assets/gallery/sketch-book-project/08.png",
      "assets/gallery/sketch-book-project/09.jpg",
      "assets/gallery/sketch-book-project/10.jpg",
      "assets/gallery/sketch-book-project/11.jpg",
      "assets/gallery/sketch-book-project/12.jpg",
      "assets/gallery/sketch-book-project/13.jpg",
      "assets/gallery/sketch-book-project/14.jpg",
      "assets/gallery/sketch-book-project/15.jpg",
      "assets/gallery/sketch-book-project/16.jpg",
      "assets/gallery/sketch-book-project/17.jpg",
      "assets/gallery/sketch-book-project/26.jpg",
      "assets/gallery/sketch-book-project/27.jpg"
    ]
  },
  {
    "id": "plein-air",
    "title": "PLEIN AIR",
    "category": "sketch-book",
    "image": "assets/plein-air.jpg",
    "description": "Outdoor painting studies made from direct observation.",
    "gallery": [
      "assets/editor-media/1785033084779-a1dfcc41-123a-4a9f-8508-048c1b0ac8d6.jpg",
      "assets/gallery/plein-air/02.jpg",
      "assets/gallery/plein-air/03.jpg",
      "assets/gallery/plein-air/04.jpg",
      "assets/gallery/plein-air/05.jpg",
      "assets/gallery/plein-air/06.jpg",
      "assets/gallery/plein-air/07.png",
      "assets/gallery/plein-air/08.png",
      "assets/gallery/plein-air/09.jpg",
      "assets/gallery/plein-air/10.png",
      "assets/gallery/plein-air/11.png",
      "assets/gallery/plein-air/20.png",
      "assets/gallery/plein-air/21.jpg"
    ]
  },
  {
    "id": "grosh",
    "title": "GROSH",
    "category": "story-art",
    "image": "assets/grosh.jpg",
    "description": "Narrative art and visual development explorations.",
    "gallery": [
      "assets/gallery/grosh/01.jpg",
      "assets/gallery/grosh/02.jpg",
      "assets/gallery/grosh/03.jpg",
      "assets/gallery/grosh/04.jpg",
      "assets/gallery/grosh/05.jpg",
      "assets/gallery/grosh/06.jpg",
      "assets/gallery/grosh/07.jpg",
      "assets/gallery/grosh/16.png",
      "assets/gallery/grosh/17.jpg"
    ]
  },
  {
    "id": "collage",
    "title": "COLLAGE",
    "category": "personal-projects",
    "image": "assets/collage.png",
    "description": "Mixed-media personal experiments with shape, texture, and composition.",
    "gallery": [
      "assets/editor-media/1785031052503-7f20da71-2c00-4353-8094-2dfa0b682eb4.png",
      "assets/gallery/collage/01.jpg",
      "assets/gallery/collage/02.jpg",
      "assets/gallery/collage/03.jpg",
      "assets/gallery/collage/12.gif",
      "assets/gallery/collage/13.png"
    ]
  },
  {
    "id": "personal-projects-project",
    "title": "PERSONAL PROJECTS",
    "category": "personal-projects",
    "image": "assets/personal-projects.jpg",
    "description": "Selected independent projects and exploratory image-making.",
    "gallery": [
      "assets/gallery/personal-projects-project/01.jpg",
      "assets/gallery/personal-projects-project/02.jpg",
      "assets/gallery/personal-projects-project/03.jpg",
      "assets/gallery/personal-projects-project/04.jpg",
      "assets/gallery/personal-projects-project/05.jpg",
      "assets/gallery/personal-projects-project/06.jpg",
      "assets/gallery/personal-projects-project/15.png",
      "assets/gallery/personal-projects-project/16.jpg"
    ]
  },
  {
    "id": "prop-materials",
    "title": "PROP MATERIALS",
    "category": "graphic-design",
    "image": "assets/exact-covers/prop-materials.jpg",
    "description": "Prop and material design studies for visual storytelling.",
    "gallery": [
      "assets/gallery/prop-materials/01.png",
      "assets/gallery/prop-materials/02.png",
      "assets/gallery/prop-materials/11.png",
      "assets/gallery/prop-materials/12.png"
    ]
  },
  {
    "id": "suicide-prevention-posters",
    "title": "GRAPHIC DESIGN",
    "category": "graphic-design",
    "image": "assets/exact-covers/suicide-prevention-posters.jpg",
    "description": "Graphic poster work built around public-service messaging.",
    "gallery": [
      "assets/gallery/suicide-prevention-posters/01.png",
      "assets/gallery/suicide-prevention-posters/02.png",
      "assets/gallery/suicide-prevention-posters/03.jpg",
      "assets/editor-media/1785031434621-1613c168-1995-42c7-a541-6292c0aef8c4.jpg",
      "assets/gallery/suicide-prevention-posters/04.png",
      "assets/editor-media/1785031131613-0579dde3-9c59-495a-a5e1-9108f50df35a.png",
      "assets/editor-media/1785031131613-71800c21-e779-4efe-9f20-52476e09d2bd.jpg",
      "assets/editor-media/1785031172813-6b5b3b3d-1e44-4ad2-8fec-8383f0cabe00.jpg",
      "assets/editor-media/1785031172823-3654d569-959e-419a-9f00-df3f69ea4e2e.png",
      "assets/editor-media/1785031180111-ad2bbc72-c41e-4f57-8534-24ebf941b0a0.png",
      "assets/gallery/suicide-prevention-posters/13.png"
    ]
  },
  {
    "id": "3d-blender",
    "title": "3D BLENDER",
    "category": "personal-projects",
    "image": "assets/editor-media/1785033634957-116f199a-7edb-4776-85ef-755e21221241.png",
    "description": "3D Blender studies and rendered design experiments.",
    "gallery": [
      "assets/gallery/3d-blender/01.png",
      "assets/gallery/3d-blender/02.png",
      "assets/gallery/3d-blender/03.png",
      "assets/editor-media/1785031223004-b5bb8282-aaba-4af1-b91c-fdc985dbfb81.png",
      "assets/gallery/3d-blender/12.jpg",
      "assets/gallery/3d-blender/13.png"
    ]
  },
  {
    "id": "character-design",
    "title": "CHARACTER DESIGN",
    "category": "story-art",
    "image": "assets/editor-media/1785033687946-36cec979-a2d0-47f1-8742-d7f6f4637a61.gif",
    "description": "Character design explorations, silhouettes, costumes, and expression.",
    "gallery": [
      "assets/gallery/character-design/01.png",
      "assets/gallery/character-design/02.gif",
      "assets/gallery/character-design/03.png",
      "assets/gallery/character-design/04.png",
      "assets/gallery/character-design/06.jpg",
      "assets/gallery/character-design/07.jpg",
      "assets/gallery/character-design/08.gif",
      "assets/gallery/character-design/09.png",
      "assets/gallery/character-design/10.png",
      "assets/gallery/character-design/11.png",
      "assets/gallery/character-design/12.jpg",
      "assets/gallery/character-design/21.png",
      "assets/gallery/character-design/22.jpg"
    ]
  }
];

const relatedProjects = {
  'eva-annie': ['story-backgrounds', 'personal-projects-project'],
  'story-backgrounds': ['prop-materials', 'grosh'],
  'rome': ['story-backgrounds', 'grosh'],
  'sketch-book-project': ['3d-blender', 'prop-materials'],
  'plein-air': ['sketch-book-project', 'prop-materials'],
  'grosh': ['collage', 'plein-air'],
  'collage': ['rome', 'eva-annie'],
  'personal-projects-project': ['story-backgrounds', 'suicide-prevention-posters'],
  'prop-materials': ['collage', 'character-design'],
  'suicide-prevention-posters': ['plein-air'],
  '3d-blender': ['eva-annie', 'collage'],
  'character-design': ['personal-projects-project', 'suicide-prevention-posters']
};

defaultProjects.forEach((project) => {
  project.gallery = project.gallery?.length ? project.gallery : (window.DEFAULT_GALLERIES?.[project.id] || [project.image]);
});

const body = document.body;
const menuButton = document.querySelector('.menu-button');
const navLinks = [...document.querySelectorAll('.nav a, .mobile-nav a')];
const projectGrid = document.querySelector('.project-grid');
const contact = document.querySelector('.contact');
const admin = document.querySelector('.admin');
const adminLogin = document.querySelector('.admin-login');
const adminPanel = document.querySelector('.admin-panel');
const keyForm = document.querySelector('.key-form');
const keyInput = document.querySelector('#editor-key');
const keyError = document.querySelector('.key-error');
const projectSelect = document.querySelector('.image-project-select');
const addPosition = document.querySelector('.image-add-position');
const addInput = document.querySelector('.image-add-input');
const dropZone = document.querySelector('.editor-drop-zone');
const coverInput = document.querySelector('.cover-add-input');
const coverDropZone = document.querySelector('.cover-drop-zone');
const editorGrid = document.querySelector('.image-editor-grid');
const editorStatus = document.querySelector('.image-editor-status');
const openProjectLink = document.querySelector('.editor-open-project');

let projects = loadProjects();
let selectedProjectId = projects[0]?.id || '';
let draggedIndex = null;

function loadProjects() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return structuredClone(defaultProjects);

  try {
    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed) || !parsed.length) return structuredClone(defaultProjects);
    const normalized = parsed.map((project) => ({
      ...project,
      category: project.id === 'suicide-prevention-posters' ? 'graphic-design' : project.category,
      title: project.id === 'suicide-prevention-posters' ? 'GRAPHIC DESIGN' : project.title,
      gallery: project.gallery?.length ? project.gallery : window.DEFAULT_GALLERIES?.[project.id] || [project.image]
    }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
    return normalized;
  } catch {
    return structuredClone(defaultProjects);
  }
}

function saveProjects() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

function projectById(id) {
  return projects.find((project) => project.id === id);
}

function relatedCountFor(project) {
  return (relatedProjects[project.id] || []).filter((id) => id !== project.id).length;
}

function artworkCountFor(project) {
  return Math.max(0, (project.gallery?.length || 0) - relatedCountFor(project));
}

function artworkEntries(project) {
  return (project.gallery || []).slice(0, artworkCountFor(project));
}

function defaultCoverFor(project) {
  return window.DEFAULT_GALLERIES?.[project.id]?.[0] || project.image;
}

function openMediaDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(MEDIA_DB_NAME, 1);
    request.addEventListener('upgradeneeded', () => {
      request.result.createObjectStore(MEDIA_STORE_NAME, { keyPath: 'id' });
    });
    request.addEventListener('success', () => resolve(request.result));
    request.addEventListener('error', () => reject(request.error));
  });
}

async function saveLocalBlob(blob, name = 'artwork') {
  const db = await openMediaDb();
  const id = `${Date.now()}-${crypto.randomUUID()}`;

  await new Promise((resolve, reject) => {
    const transaction = db.transaction(MEDIA_STORE_NAME, 'readwrite');
    transaction.objectStore(MEDIA_STORE_NAME).put({ id, blob, name, type: blob.type || 'image/jpeg', createdAt: new Date().toISOString() });
    transaction.addEventListener('complete', resolve);
    transaction.addEventListener('error', () => reject(transaction.error));
  });

  db.close();
  return `${MEDIA_PREFIX}${id}`;
}

function dataUrlToBlob(dataUrl) {
  const [header, base64] = dataUrl.split(',');
  const mime = header.match(/data:(.*?);/)?.[1] || 'image/jpeg';
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);

  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }

  return new Blob([bytes], { type: mime });
}

async function resolveImageSource(src) {
  if (!src?.startsWith?.(MEDIA_PREFIX)) return src;

  const db = await openMediaDb();
  const id = src.slice(MEDIA_PREFIX.length);
  const record = await new Promise((resolve, reject) => {
    const transaction = db.transaction(MEDIA_STORE_NAME, 'readonly');
    const request = transaction.objectStore(MEDIA_STORE_NAME).get(id);
    request.addEventListener('success', () => resolve(request.result));
    request.addEventListener('error', () => reject(request.error));
  });
  db.close();

  return record?.blob ? URL.createObjectURL(record.blob) : '';
}

async function migrateInlineGalleryImages() {
  let changed = false;

  for (const project of projects) {
    if (!Array.isArray(project.gallery)) continue;

    for (let index = 0; index < project.gallery.length; index += 1) {
      const src = project.gallery[index];
      if (typeof src === 'string' && src.startsWith('data:image/')) {
        project.gallery[index] = await saveLocalBlob(dataUrlToBlob(src), `${project.id}-${index}`);
        changed = true;
      }
    }
  }

  if (changed) saveProjects();
}

function applyTypography() {
  let typography = { ...defaultTypography };
  try {
    typography = { ...defaultTypography, ...JSON.parse(localStorage.getItem(TYPOGRAPHY_KEY) || '{}') };
  } catch {
    typography = { ...defaultTypography };
  }
  const root = document.documentElement;
  root.style.setProperty('--site-font', typography.siteFont);
  root.style.setProperty('--title-font', typography.titleFont);
  root.style.setProperty('--nav-font', typography.navFont);
  root.style.setProperty('--body-size', `${typography.bodySize}px`);
  root.style.setProperty('--logo-size', `${typography.logoSize}px`);
  root.style.setProperty('--nav-size', `${typography.navSize}px`);
  root.style.setProperty('--project-title-size', `${typography.projectTitleSize}px`);
  root.style.setProperty('--detail-title-size', `${typography.detailTitleSize}px`);
  root.style.setProperty('--title-weight', typography.titleWeight);
  root.style.setProperty('--nav-weight', typography.navWeight);
}

async function renderProjects(filter = 'all') {
  projectGrid.innerHTML = '';

  for (const project of projects) {
    const card = document.createElement('a');
    card.className = `project-card ${project.category}`;
    card.href = `project.html?id=${encodeURIComponent(project.id)}`;
    card.hidden = filter !== 'all' && project.category !== filter;
    card.innerHTML = `
      <img src="${await resolveImageSource(project.image)}" alt="">
      <span>${project.title}</span>
    `;
    card.querySelector('img').addEventListener('error', (event) => {
      event.currentTarget.src = defaultCoverFor(project);
    }, { once: true });
    projectGrid.append(card);
  }
}

function renderProjectOptions() {
  projectSelect.innerHTML = '';
  projects.forEach((project) => {
    const option = document.createElement('option');
    option.value = project.id;
    option.textContent = project.title;
    projectSelect.append(option);
  });

  if (!projectById(selectedProjectId) && projects[0]) selectedProjectId = projects[0].id;
  projectSelect.value = selectedProjectId;
}

function renderAddPositions(count) {
  const currentValue = addPosition.value;
  addPosition.innerHTML = `
    <option value="end">放在最后</option>
    <option value="start">放在最前</option>
  `;

  for (let index = 0; index < count; index += 1) {
    const option = document.createElement('option');
    option.value = `after:${index}`;
    option.textContent = `放在第 ${index + 1} 张后面`;
    addPosition.append(option);
  }

  if ([...addPosition.options].some((option) => option.value === currentValue)) addPosition.value = currentValue;
}

async function renderImageEditor() {
  await migrateInlineGalleryImages();
  const project = projectById(selectedProjectId);
  if (!project) return;

  const entries = artworkEntries(project);
  const sources = await Promise.all(entries.map(resolveImageSource));
  renderAddPositions(entries.length);
  openProjectLink.href = `project.html?id=${encodeURIComponent(project.id)}`;
  editorGrid.innerHTML = '';

  sources.forEach((src, index) => {
    const item = document.createElement('div');
    item.className = 'editor-image-item';
    item.draggable = true;
    item.innerHTML = `
      <img src="${src}" alt="">
      <span>${index + 1}</span>
      <button type="button" data-delete="${index}">删除</button>
    `;
    item.addEventListener('dragstart', (event) => {
      draggedIndex = index;
      item.classList.add('is-sorting');
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/plain', String(index));
    });
    item.addEventListener('dragover', (event) => {
      if (draggedIndex === null) return;
      event.preventDefault();
      item.classList.add('is-drop-target');
    });
    item.addEventListener('dragleave', () => item.classList.remove('is-drop-target'));
    item.addEventListener('drop', (event) => {
      event.preventDefault();
      reorderArtwork(draggedIndex, index);
    });
    item.addEventListener('dragend', clearSortState);
    editorGrid.append(item);
  });

  editorStatus.textContent = `正在编辑：${project.title}，共 ${entries.length} 张内页图片`;
}

function clearSortState() {
  draggedIndex = null;
  document.querySelectorAll('.editor-image-item.is-sorting, .editor-image-item.is-drop-target').forEach((item) => {
    item.classList.remove('is-sorting', 'is-drop-target');
  });
}

function deleteArtwork(index) {
  const project = projectById(selectedProjectId);
  if (!project || !window.confirm('确定删除这张图吗？')) return;
  project.gallery.splice(index, 1);
  saveProjects();
  renderImageEditor();
}

function reorderArtwork(fromIndex, toIndex) {
  const project = projectById(selectedProjectId);
  if (!project || fromIndex === null || fromIndex === toIndex) return;
  const [moved] = project.gallery.splice(fromIndex, 1);
  project.gallery.splice(toIndex, 0, moved);
  saveProjects();
  clearSortState();
  renderImageEditor();
}

async function addArtwork(files) {
  const project = projectById(selectedProjectId);
  if (!project || !files.length) return;

  const imageFiles = [...files].filter((file) => file.type.startsWith('image/'));
  if (!imageFiles.length) {
    editorStatus.textContent = '没有找到图片文件，请拖 JPG、PNG、WEBP 等图片进来';
    return;
  }

  try {
    editorStatus.textContent = '正在添加图片...';
    await migrateInlineGalleryImages();
    const refs = await Promise.all(imageFiles.map((file) => saveLocalBlob(file, file.name)));
    const count = artworkCountFor(project);
    let insertIndex = count;

    if (addPosition.value === 'start') insertIndex = 0;
    if (addPosition.value.startsWith('after:')) insertIndex = Number(addPosition.value.replace('after:', '')) + 1;

    project.gallery.splice(insertIndex, 0, ...refs);
    saveProjects();
    await renderImageEditor();
    editorStatus.textContent = `已添加 ${refs.length} 张图片`;
  } catch {
    editorStatus.textContent = '图片太大，浏览器保存不下。请先压缩图片或一次少加几张';
  }
}

async function changeCover(files) {
  const project = projectById(selectedProjectId);
  if (!project || !files.length) return;

  const file = [...files].find((item) => item.type.startsWith('image/'));
  if (!file) {
    editorStatus.textContent = '没有找到图片文件，请拖 JPG、PNG、WEBP 等图片进来';
    return;
  }

  try {
    editorStatus.textContent = '正在更换首页封面...';
    project.image = await saveLocalBlob(file, file.name);
    saveProjects();
    await renderProjects();
    await renderImageEditor();
    editorStatus.textContent = `${project.title} 的首页封面已更换`;
  } catch {
    editorStatus.textContent = '封面图片太大，浏览器保存不下。请先压缩图片';
  }
}

async function sha256(value) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
}

function setActive(hash) {
  const filterHashes = ['#all', '#story-art', '#personal-projects', '#graphic-design', '#sketch-book'];
  const key = hash === '#contact' ? '#contact' : filterHashes.includes(hash) ? hash : '#all';
  navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === key));
}

function showAdmin() {
  projectGrid.hidden = true;
  contact.hidden = true;
  admin.hidden = false;
  const unlocked = sessionStorage.getItem(SESSION_KEY) === 'true';
  adminLogin.hidden = unlocked;
  adminPanel.hidden = !unlocked;
  if (unlocked) {
    renderProjectOptions();
    renderImageEditor();
  }
  setActive('#all');
}

function showContact() {
  projectGrid.hidden = true;
  admin.hidden = true;
  contact.hidden = false;
  setActive('#contact');
}

function route() {
  const hash = window.location.hash || '#all';
  const filters = {
    '#all': 'all',
    '#story-art': 'story-art',
    '#personal-projects': 'personal-projects',
    '#graphic-design': 'graphic-design',
    '#sketch-book': 'sketch-book'
  };
  const detailProject = projectById(hash.slice(1));

  if (hash === '#admin' || hash === '#ryanxieeditor') {
    showAdmin();
    return;
  }

  if (hash === '#contact') {
    showContact();
    return;
  }

  if (detailProject) {
    window.location.href = `project.html?id=${encodeURIComponent(detailProject.id)}`;
    return;
  }

  renderProjects(filters[hash] || 'all');
  projectGrid.hidden = false;
  contact.hidden = true;
  admin.hidden = true;
  setActive(hash);
}

function closeMenu() {
  body.classList.remove('menu-open');
  menuButton.setAttribute('aria-expanded', 'false');
  document.querySelector('.mobile-panel').setAttribute('aria-hidden', 'true');
}

menuButton.addEventListener('click', () => {
  const open = body.classList.toggle('menu-open');
  menuButton.setAttribute('aria-expanded', String(open));
  document.querySelector('.mobile-panel').setAttribute('aria-hidden', String(!open));
});

navLinks.forEach((link) => link.addEventListener('click', closeMenu));

keyForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const hash = await sha256(keyInput.value);
  if (hash !== EDITOR_KEY_HASH) {
    keyError.textContent = '密钥不正确。';
    return;
  }
  keyInput.value = '';
  keyError.textContent = '';
  sessionStorage.setItem(SESSION_KEY, 'true');
  showAdmin();
});

projectSelect.addEventListener('change', () => {
  selectedProjectId = projectSelect.value;
  renderImageEditor();
});

editorGrid.addEventListener('click', (event) => {
  const button = event.target.closest('[data-delete]');
  if (!button) return;
  deleteArtwork(Number(button.dataset.delete));
});

addInput.addEventListener('change', async (event) => {
  await addArtwork(event.target.files);
  event.target.value = '';
});

coverInput.addEventListener('change', async (event) => {
  await changeCover(event.target.files);
  event.target.value = '';
});

['dragenter', 'dragover'].forEach((eventName) => {
  dropZone.addEventListener(eventName, (event) => {
    event.preventDefault();
    dropZone.classList.add('is-dragging');
  });

  coverDropZone.addEventListener(eventName, (event) => {
    event.preventDefault();
    coverDropZone.classList.add('is-dragging');
  });
});

['dragleave', 'drop'].forEach((eventName) => {
  dropZone.addEventListener(eventName, (event) => {
    event.preventDefault();
    dropZone.classList.remove('is-dragging');
  });

  coverDropZone.addEventListener(eventName, (event) => {
    event.preventDefault();
    coverDropZone.classList.remove('is-dragging');
  });
});

dropZone.addEventListener('drop', (event) => addArtwork(event.dataTransfer.files));
coverDropZone.addEventListener('drop', (event) => changeCover(event.dataTransfer.files));

document.addEventListener('dragover', (event) => event.preventDefault());
document.addEventListener('drop', (event) => {
  if (!event.target.closest('.editor-drop-zone') && !event.target.closest('.cover-drop-zone')) event.preventDefault();
});

document.querySelector('[data-action="reset-gallery"]').addEventListener('click', () => {
  const project = projectById(selectedProjectId);
  if (!project || !window.confirm('恢复这个作品的默认内页图片吗？')) return;
  project.gallery = [...(window.DEFAULT_GALLERIES?.[project.id] || [project.image])];
  saveProjects();
  renderImageEditor();
});

document.querySelector('[data-action="lock"]').addEventListener('click', () => {
  sessionStorage.removeItem(SESSION_KEY);
  showAdmin();
});

window.addEventListener('hashchange', route);
applyTypography();
renderProjectOptions();
route();
