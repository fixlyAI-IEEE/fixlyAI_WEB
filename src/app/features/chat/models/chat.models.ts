export interface ChatRequest {
    message: string;
}

export interface SuggestedButton {
    label: string;
    action: 'show_workers' | 'send_request' | 'new_question';
    job_type_id?: number;
}

export interface ChatResponse {
    message: string;
    suggested_buttons: SuggestedButton[];
    recommended_job_type: { id: number; name: string } | null;
    recommended_workers: any[];
}

export interface ChatMessage {
    sender: 'user' | 'bot';
    text: string;
    suggested_buttons?: SuggestedButton[];
    timestamp: Date;
}