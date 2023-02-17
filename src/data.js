import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'What We Offer',
      links: [
        {
          text: 'Self Assessments',
          href: '#',
        },
        {
          text: 'Bookkeeping',
          href: '#',
        },
        {
          text: 'Payroll',
          href: '#',
        },
        {
          text: 'Annual Accounts',
          href: '#',
        },
        {
          text: 'Insurance',
          href: '#',
        },
      ],
    },
    {
      text: 'Who We Help',
      links: [
        {
          text: 'Small Businesses',
          href: '#',
        },

        {
          text: 'Contractors',
          href: '#',
        },
        {
          text: 'Sole Traders',
          href: '#',
        },
        {
          text: 'Freelancers',
          href: '#',
        },
        {
          text: 'Startups',
          href: '#',
        },
        {
          text: 'Property Owners',
          href: '#',
        },
      ],
    },
    {
      text: 'How We Work',
      href: '#',
    },

    {
      text: 'About Us',
      href: '#',
    },
  ],
  actions: [{ type: 'button', text: 'Get A Quote' }],
};

export const footerData = {
  links: [
    {
      title: 'Navigation',
      links: [
        { text: 'Freelancer Accountancy', href: '#' },

        { text: 'Accountants For Contractors', href: '#' },
        { text: 'Accounting For Sole Traders', href: '#' },
      ],
    },

    {
      title: '',
      links: [
        { text: 'Accounting for Startup', href: '#' },
        { text: 'Property Accountants', href: '#' },
        { text: 'Small Business Accounting ', href: '#' },
      ],
    },
  ],

  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
};
