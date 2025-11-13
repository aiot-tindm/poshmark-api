import * as t from 'io-ts';
/**
 * Conversation validators and types
 * TypeScript types provided for better IDE support.
 */
/**
 * Conversation ID
 */
export declare const ConversationIdC: t.StringC;
export type ConversationId = t.TypeOf<typeof ConversationIdC>;
/**
 * Message ID
 */
export declare const MessageIdC: t.StringC;
export type MessageId = t.TypeOf<typeof MessageIdC>;
/**
 * TypeScript types for complex objects (no runtime validation)
 */
export interface Conversation {
    conversationId?: string;
    subject?: string;
    participants?: string[];
    status?: string;
    createdDate?: string;
    lastMessageDate?: string;
    [key: string]: unknown;
}
export interface Message {
    messageId?: string;
    conversationId?: string;
    senderId?: string;
    recipientId?: string;
    content?: string;
    sentDate?: string;
    read?: boolean;
    [key: string]: unknown;
}
