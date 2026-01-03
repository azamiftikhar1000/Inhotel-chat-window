import {CustomerMetadata, WidgetSettings} from './types';

/**
 * LEGACY API ENDPOINTS - DEPRECATED
 *
 * These functions are stubs from the old widget integration.
 * The widget now uses the A2A (Agent-to-Agent) protocol for all communication.
 *
 * If these functions are called from legacy code, they will
 * return empty responses to avoid errors.
 */

const EMPTY_METADATA = {} as CustomerMetadata;

// Stub: No longer creates customers - legacy stub
export const createNewCustomer = async (
  accountId: string,
  metadata: CustomerMetadata = EMPTY_METADATA,
  baseUrl?: string
) => {
  console.warn(
    '[api.ts] createNewCustomer is deprecated - using A2A protocol instead'
  );
  return {id: 'stub-customer', ...metadata};
};

// Stub: No longer validates - legacy stub
export const isValidCustomer = async (
  customerId: string,
  accountId: string,
  baseUrl?: string
) => {
  console.warn(
    '[api.ts] isValidCustomer is deprecated - using A2A protocol instead'
  );
  return true;
};

// Stub: No longer updates metadata - legacy stub
export const updateCustomerMetadata = async (
  customerId: string,
  metadata: CustomerMetadata = EMPTY_METADATA,
  baseUrl?: string
) => {
  console.warn(
    '[api.ts] updateCustomerMetadata is deprecated - using A2A protocol instead'
  );
  return metadata;
};

// Stub: No longer creates conversations - legacy stub
export const createNewConversation = async (
  params: {
    account_id: string;
    customer_id: string;
    inbox_id?: string;
  },
  baseUrl?: string
) => {
  console.warn(
    '[api.ts] createNewConversation is deprecated - using A2A protocol instead'
  );
  return {id: 'stub-conversation', ...params};
};

// Stub: No longer finds customers - legacy stub
export const findCustomerByExternalId = async (
  externalId: string,
  accountId: string,
  filters: Record<string, any>,
  baseUrl?: string
) => {
  console.warn(
    '[api.ts] findCustomerByExternalId is deprecated - using A2A protocol instead'
  );
  return null;
};

// Stub: No longer fetches conversations - legacy stub
export const fetchCustomerConversations = async (
  query: {
    customer_id: string;
    account_id: string;
  },
  baseUrl?: string
) => {
  console.warn(
    '[api.ts] fetchCustomerConversations is deprecated - using A2A protocol instead'
  );
  return [];
};

// Stub: No longer fetches widget settings - legacy stub
export const fetchWidgetSettings = async (
  query: {account_id: string; inbox_id?: string},
  baseUrl?: string
): Promise<WidgetSettings> => {
  console.warn(
    '[api.ts] fetchWidgetSettings is deprecated - using A2A protocol instead'
  );
  return {} as WidgetSettings;
};

// Stub: No longer uploads - legacy stub
export const upload = async (
  accountId: string,
  file: any,
  baseUrl?: string
) => {
  console.warn('[api.ts] upload is deprecated - using A2A protocol instead');
  return {file_url: ''};
};
