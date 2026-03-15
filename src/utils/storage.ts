import type { Project } from "../types/project"

const KEY = "projects"

export function getProjects(): Project[] {
  const data = localStorage.getItem(KEY)
  return data ? JSON.parse(data) : []
}

export function saveProjects(projects: Project[]) {
  localStorage.setItem(KEY, JSON.stringify(projects))
}