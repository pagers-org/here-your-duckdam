import { URL } from 'url';

interface GtagEventType {
    action: string;
    category: string;
    label: string;
    value: number;
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID as string;

export const pageview = (url: URL) => {
    window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
    });
};

export const event = ({ action, category, label, value }: GtagEventType) => {
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    });
};
