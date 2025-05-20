// src/types/index.ts

export interface Task {
    id: string;
    title: string;
    description?: string;
    createdAt: Date;
}

export interface ApiResponse<T> {
    data: T;
    error?: string;
}