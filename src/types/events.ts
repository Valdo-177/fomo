export interface IUserData {
    id: number;
    first_name: string;
    first_lastname: string;
    second_name: string;
    second_lastname: string;
    phone_number: string;
    email: string;
    photo: null | string;
    username: string | null;
    vp_city: string | null;
    vp_country: string | null;
    uid_google: string | null;
    id_profile: number;
    status: number;
    is_verified: boolean;
    creating: string;
    address: string;
    document: number;
    type_document: string;
    role: string;
    social_media: [{ name: string; url: string }] | null;
    topics: number[];
    description: string;
    email_verified: boolean;
}

export interface IEvent {
    title?: string | null;
    description?: string | null;
    supp_photos?: string[] | null;
    event_url: string | null;
    vp_categories: number[] | null;
    vp_modality: number | null;
    vp_platform: number | null;
    vp_country: number | null;
    vp_city: number | null;
    location: string | null;
    id_organization: string | null;
    creating: string;
    public_id: string;
    is_paid: boolean;
    is_private: boolean;
    is_published: boolean;
    social_media?: IEventSocialMedia[] | null;
    faq: IEventFaq[];
    form?: IEventForm[] | null;
    tickets?: IEventTicket[] | null;
    photo_cover?: string | null;
    date?: number | null;
    start_time?: string | null;
    end_time?: string | null;
    creator: IUserData;
}

export interface AttendanceData {
    total_registered: number;
    total_attended: number;
    attendance_percentage: number;
    registered_per_month: Record<string, number>;
    attendance_per_month: Record<string, number>;
}

export interface CreatorData {
    total_events: number;
    total_assistants_registered: number;
    total_assisted: number;
    assistants_by_event: AssistantsByEvent[];
    total_sales: number;
    fomo_fee: number;
    total_earnings: number;
}

export interface AssistantsByEvent {
    title: string;
    total_assistants: number;
    total_assisted: number;
    date: string;
}

export interface IEventFormData {
    title?: string | null;
    description?: string | null;
    vp_categories?: number[] | null;
    vp_modality?: number | null;
    vp_platform?: number | null;
    event_url?: string | null;
    vp_country?: number | null;
    vp_city?: number | null;
    location?: string | null;
    is_private: boolean;
    is_paid: boolean;
    social_media?: IEventSocialMedia[] | null;
    faq?: IEventFaq[];
    form: IEventForm[];
    tickets?: IEventTicket[] | null;
    photo_cover?: null | string;
    supp_photos?: string[] | null;
    photo?: IFileB64 | null;
    images?: IFileB64[] | [];
    date?: number | null;
    start_time?: string | null;
    end_time?: string | null;
    views?: string | null;
    tickets_purchased?: string | null;
    capacity: number;
    public_id?: string;
    timezone?: number | null;
    is_ended?: boolean;
    creating?: string | null;
    total_sales?: number | null;
    fomo_fee?: number | null;
    total_earnings?: number | null;
    creator?: IEventCreator | null;
}

export interface IEventCreator {
    first_name?: string;
    first_lastname?: string;
    second_name?: string;
    second_lastname?: string;
    phone_number?: string;
    description?: string;
    email?: string;
    photo?: string;
    vp_city?: number;
    vp_country?: number;
    social_media?: IEventSocialMedia[];
    topics?: number[];
    is_registered?: boolean;
    email_verified?: boolean;
    creating?: string;
}

export interface IEventFormState {
    EventState: number | null;
    TypeEvent: number | null;
    TypeList: number | null;
}

export interface IEventDate {
    date: number;
    start_time: string;
    end_time: string;
    timezone: string;
}

export interface IEventSocialMedia {
    name: string;
    url: string;
}

export interface IEventFaq {
    question: string;
    answer: string;
}

export interface IEventForm {
    question: string;
    vp_type: number;
    default_question: boolean;
    required: boolean;
    options?: string[];
    name?: string;
}

export interface IEventTicket {
    id?: number;
    name: string;
    price: number | string;
    quantity: number | string;
    apply_iva: boolean;
    start_date: number | Date;
    end_date: number | Date;
    min_purchase: number | string;
    max_purchase: number | string;
    start_time: string;
    end_time: string;
    is_paid: boolean;
    is_active: boolean;
    is_combo: boolean;
    ticket_amount: number;
}

export interface IFileB64 {
    file: string;
    name: string;
    url: string;
}

export interface IEventDetailResponse {
    status: boolean;
    event: IEvent;
}

export interface IPublicEventsResponse {
    status: boolean;
    events: IEvent[];
}
