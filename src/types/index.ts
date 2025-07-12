export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  points: number;
  isAdmin: boolean;
  createdAt: Date;
}

export interface ClothingItem {
  id: string;
  title: string;
  description: string;
  category: 'tops' | 'bottoms' | 'dresses' | 'outerwear' | 'shoes' | 'accessories';
  type: string;
  size: string;
  condition: 'new' | 'like-new' | 'good' | 'fair';
  tags: string[];
  images: string[];
  uploaderId: string;
  uploaderName: string;
  uploaderAvatar?: string;
  pointsValue: number;
  isAvailable: boolean;
  isApproved: boolean;
  createdAt: Date;
}

export interface SwapRequest {
  id: string;
  itemId: string;
  requesterId: string;
  ownerId: string;
  status: 'pending' | 'approved' | 'rejected' | 'completed';
  type: 'swap' | 'points';
  offeredItemId?: string;
  pointsUsed?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}