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
      cell: {
        Row: {
          grid_id: number | null
          id: number
          number: number | null
          state: boolean | null
        }
        Insert: {
          grid_id?: number | null
          id?: never
          number?: number | null
          state?: boolean | null
        }
        Update: {
          grid_id?: number | null
          id?: never
          number?: number | null
          state?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "cell_grid_id_fkey"
            columns: ["grid_id"]
            referencedRelation: "grid"
            referencedColumns: ["id"]
          }
        ]
      }
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
