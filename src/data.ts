/* ---------------------------------------------------------------------------
   Edit this file to update your portfolio content.
   Nothing else needs to change for normal updates.
--------------------------------------------------------------------------- */

export const profile = {
  name: 'Jessica Jong',
  handle: 'jessicaj06',
  role: 'AI / GPU Computing Engineer in training',
  tagline:
    'Learning to make machines think faster — high-performance ML on NVIDIA GPUs with CUDA C++.',
  location: 'California, US',
  email: 'jessicalake0615@gmail.com',
  github: 'https://github.com/jessicaj06',
  // Add your real links when ready:
  linkedin: '',
  resumeUrl: '',
  about: [
    "I'm an aspiring AI engineer focused on the place where machine learning meets the metal: squeezing maximum performance out of NVIDIA GPUs.",
    'Right now I spend my days writing CUDA C++ kernels, studying GPU memory hierarchies, and learning how modern deep-learning frameworks turn math into massively parallel work.',
    'My goal is to build and optimize ML systems that are not just accurate, but genuinely fast — and to share what I learn along the way.',
  ],
}

export type Skill = { name: string; level: number; note: string }

export const skillGroups: { title: string; skills: Skill[] }[] = [
  {
    title: 'GPU & Parallel Computing',
    skills: [
      { name: 'CUDA C++', level: 70, note: 'Kernels, memory model, streams' },
      { name: 'Performance tuning', level: 60, note: 'Occupancy, coalescing, profiling' },
      { name: 'C / C++', level: 65, note: 'Systems & numerical code' },
      { name: 'Nsight / nvprof', level: 50, note: 'Profiling & bottleneck analysis' },
    ],
  },
  {
    title: 'Machine Learning',
    skills: [
      { name: 'PyTorch', level: 70, note: 'Training loops, custom ops' },
      { name: 'Deep Learning', level: 65, note: 'CNNs, transformers, training' },
      { name: 'NumPy / Python', level: 80, note: 'Data & prototyping' },
      { name: 'Math (LinAlg)', level: 70, note: 'The foundation of it all' },
    ],
  },
  {
    title: 'Full-Stack Web',
    skills: [
      { name: 'React', level: 60, note: 'Components & hooks' },
      { name: 'Node / Express', level: 50, note: 'REST APIs' },
      { name: 'HTML / CSS', level: 70, note: 'Tailwind & layout' },
      { name: 'SQL basics', level: 45, note: 'Postgres / SQLite' },
    ],
  },
]

export type Project = {
  title: string
  blurb: string
  tags: string[]
  repo?: string
  demo?: string
  status: 'Live' | 'Building' | 'Learning'
}

export const projects: Project[] = [
  {
    title: 'CUDA Kernel Playground',
    blurb:
      'A growing collection of hand-written CUDA kernels — vector add, tiled matmul, reductions, softmax — each benchmarked against a naive baseline to measure real speedups.',
    tags: ['CUDA C++', 'Benchmarking', 'Nsight'],
    status: 'Building',
    repo: 'https://github.com/jessicaj06',
  },
  {
    title: 'Tiled Matrix Multiply',
    blurb:
      'A from-scratch GEMM kernel exploring shared-memory tiling and memory coalescing, with a write-up on how each optimization moves the needle on throughput.',
    tags: ['CUDA C++', 'Shared memory', 'GEMM'],
    status: 'Learning',
    repo: 'https://github.com/jessicaj06',
  },
  {
    title: 'Mini Neural Net in C++',
    blurb:
      'A small feed-forward network trained on MNIST, implemented in C++ to understand exactly what frameworks do under the hood — forward, backward, and gradient descent by hand.',
    tags: ['C++', 'Deep Learning', 'MNIST'],
    status: 'Learning',
    repo: 'https://github.com/jessicaj06',
  },
  {
    title: 'PyTorch Custom CUDA Op',
    blurb:
      'A custom fused activation written in CUDA and bound into PyTorch, comparing the fused kernel against the eager-mode equivalent on real tensors.',
    tags: ['PyTorch', 'CUDA', 'Extensions'],
    status: 'Building',
    repo: 'https://github.com/jessicaj06',
  },
]

export const learning = [
  'CUDA C++ — kernels, memory hierarchy, streams & profiling',
  'GPU architecture — warps, occupancy, memory coalescing',
  'Deep learning internals — autograd, optimizers, attention',
  'Performance engineering — measuring before optimizing',
]
