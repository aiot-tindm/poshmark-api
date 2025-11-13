import * as t from 'io-ts';

/**
 * Conversation validators and types
 * TypeScript types provided for better IDE support.
 */

/**
 * Conversation ID
 */
export const ConversationIdC = t.string;
export type ConversationId = t.TypeOf<typeof ConversationIdC>;

/**
 * Message ID
 */
export const MessageIdC = t.string;
export type MessageId = t.TypeOf<typeof MessageIdC>;

/**
 * TypeScript types for complex objects (no runtime validation)
 */

/**
 * Create Conversation Request
 */
export interface CreateConversationRequest {
  /** Conversation subject */
  subject?: string;
  /** Participant IDs */
  participants?: string[];
  /** Trading partner ID */
  tradingPartnerId?: string;
  /** Order reference */
  orderReference?: string;
  /** PO Number */
  poNumber?: string;
  /** Initial message */
  initialMessage?: string;
  /** Priority */
  priority?: 'low' | 'normal' | 'high' | 'urgent';
  /** Category */
  category?: string;
  [key: string]: unknown;
}

/**
 * Update Conversation Request
 */
export interface UpdateConversationRequest {
  /** Conversation ID (required) */
  conversationId?: string;
  /** Updated status */
  status?: 'open' | 'closed' | 'pending' | 'resolved';
  /** Assigned to user ID */
  assignedTo?: string;
  /** Priority */
  priority?: 'low' | 'normal' | 'high' | 'urgent';
  /** Tags */
  tags?: string[];
  /** Notes */
  notes?: string;
  [key: string]: unknown;
}

/**
 * Conversation
 */
export interface Conversation {
  conversationId?: string;
  subject?: string;
  participants?: string[];
  status?: string;
  priority?: string;
  category?: string;
  createdDate?: string;
  lastMessageDate?: string;
  lastMessage?: string;
  unreadCount?: number;
  tradingPartnerId?: string;
  orderReference?: string;
  assignedTo?: string;
  tags?: string[];
  [key: string]: unknown;
}

/**
 * Add Conversation Message Request
 */
export interface AddConversationMessageRequest {
  /** Conversation ID (required) */
  conversationId: string;
  /** Message content (required) */
  content: string;
  /** Sender ID */
  senderId?: string;
  /** Attachments */
  attachments?: Array<{
    filename?: string;
    url?: string;
    mimeType?: string;
  }>;
  /** Message type */
  messageType?: 'text' | 'system' | 'automated';
  [key: string]: unknown;
}

/**
 * Message
 */
export interface Message {
  messageId?: string;
  conversationId?: string;
  senderId?: string;
  senderName?: string;
  recipientId?: string;
  recipientName?: string;
  content?: string;
  sentDate?: string;
  read?: boolean;
  readDate?: string;
  messageType?: string;
  attachments?: Array<{
    filename?: string;
    url?: string;
    mimeType?: string;
  }>;
  [key: string]: unknown;
}

/**
 * Conversation Query
 */
export interface ConversationQuery {
  tradingPartnerId?: string;
  status?: string;
  priority?: string;
  category?: string;
  assignedTo?: string;
  startDate?: string;
  endDate?: string;
  page?: number;
  limit?: number;
  [key: string]: unknown;
}
