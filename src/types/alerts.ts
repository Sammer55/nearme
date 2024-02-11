type AlertTypes = 'company' | 'event' | 'weather' | 'posts';

export type AlertType = {
  title: string;
  description: string;
  created_at: string;
  type: AlertTypes;
  id: number;
};
