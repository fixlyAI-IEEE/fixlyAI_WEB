export interface SuggestedButton {
  label       : string;
  action      : 'new_question' | 'show_workers' | 'send_request' | 'quick_message' | string;
  job_type_id?: number;
  message    ?: string; // used when action === 'quick_message'
}

export interface RecommendedJobType {
  id  : number;
  name: string;
}

export interface ChatMessage {
  sender            : 'user' | 'bot';
  text              : string;
  suggested_buttons?: SuggestedButton[];
  recommended_job_type?: RecommendedJobType;
  timestamp         : Date;
}

export interface ChatRequest {
  message: string;
}

export interface ChatResponse {
  message              : string;
  suggested_buttons    : SuggestedButton[];
  recommended_job_type?: RecommendedJobType;
  recommended_workers ?: any[];
}