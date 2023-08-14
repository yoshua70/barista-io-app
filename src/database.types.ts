export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      grid: {
        Row: {
          columns: number | null
          created_at: string
          description: string | null
          id: number
          name: string
          rows: number | null
          user_id: string | null
        }
        Insert: {
          columns?: number | null
          created_at?: string
          description?: string | null
          id?: number
          name: string
          rows?: number | null
          user_id?: string | null
        }
        Update: {
          columns?: number | null
          created_at?: string
          description?: string | null
          id?: number
          name?: string
          rows?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
