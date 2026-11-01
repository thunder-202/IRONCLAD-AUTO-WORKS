export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  turnaround: string;
  keyIncludes: string[];
  recommendedFor: string;
}

export interface SellingPoint {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  bulletPoints: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  description: string;
  cameraSpecs?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  vehicle: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  serviceCompleted: string;
}

export interface BookingFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  vehicleMakeModel: string;
  vehicleYear: string;
  serviceRequired: string;
  preferredDate: string;
  additionalMessage: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  detail: string;
}
