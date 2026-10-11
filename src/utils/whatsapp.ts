export const BUSINESS_WHATSAPP_NUMBER = '233241920331';
export const BUSINESS_WHATSAPP_URL = `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}`;

const contactBaseMessage =
  'Hello Crown & Stitch! I found your business through your website. I would like to make an enquiry about your products and services. Please, could you assist me with the available options and prices? Thank you.';

export function buildWhatsAppUrl(
  productOrServiceName?: string,
  productIdentifier?: string,
  enquiryType?: string,
  detailedMessage?: string,
): string {
  let message = contactBaseMessage;

  if (enquiryType === 'Custom Sewing') {
    message =
      'Hello Crown & Stitch! I found your website and I am interested in your Custom Sewing service. I would like to discuss my design, measurements, pricing, and order details. Please, how do I proceed?';
  }

  if (enquiryType === 'Fascinators and Headpieces') {
    message =
      'Hello Crown & Stitch! I found your website and I am interested in your Fascinators and Headpieces. Please, could you share the available designs and prices? Thank you.';
  }

  if (productOrServiceName) {
    const productName = productIdentifier ? `${productIdentifier} (${productOrServiceName})` : productOrServiceName;
    message = `Hello Crown & Stitch! I found your website and I am interested in ${productName}. Please, could you share its price, availability, and ordering process? Thank you.`;
  }

  if (detailedMessage) {
    message = `${message} ${detailedMessage}`;
  }

  return `${BUSINESS_WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}
