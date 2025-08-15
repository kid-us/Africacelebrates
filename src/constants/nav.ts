interface NavTypes {
  id: number;
  path: string;
  label: string;
}

export const nav: NavTypes[] = [
  { id: 1, path: "#Home", label: "Home" },
  { id: 2, path: "#About", label: "About" },
  { id: 3, path: "#Program", label: "Program" },
  { id: 4, path: "#Gallery", label: "Gallery" },
];
