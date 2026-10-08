(function () {
  var BASE = 'https://incareofkelowna.com';
  var path = window.location.pathname.replace(/\/$/, '') || '/';

  function inject(data) {
    var s = document.createElement('script');
    s.type = 'application/ld+json';
    s.text = JSON.stringify(data);
    (document.head || document.body).appendChild(s);
  }

  inject({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['RealEstateAgent', 'LocalBusiness'],
        '@id': BASE + '#business',
        'name': 'Mark Jontz & Associates',
        'alternateName': 'In Care Of Kelowna',
        'url': BASE,
        'telephone': '+12508616002',
        'email': 'info@markjontz.com',
        'description': 'Mark Jontz & Associates at Royal LePage Kelowna — probate, power of attorney, and estate real estate specialists serving Kelowna, West Kelowna, Lake Country, and Peachland. 500+ estate-related transactions.',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Kelowna',
          'addressRegion': 'BC',
          'addressCountry': 'CA'
        },
        'areaServed': [
          { '@type': 'City', 'name': 'Kelowna' },
          { '@type': 'City', 'name': 'West Kelowna' },
          { '@type': 'City', 'name': 'Lake Country' },
          { '@type': 'City', 'name': 'Peachland' },
          { '@type': 'AdministrativeArea', 'name': 'Okanagan, British Columbia' }
        ],
        'parentOrganization': {
          '@type': 'RealEstateAgent',
          'name': 'Mark Jontz & Associates',
          'url': 'https://www.markjontz.com'
        },
        'sameAs': [
          'https://www.markjontz.com',
          'https://kelownalistings.com',
          'https://kelownadownsizing.com'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': BASE + '#website',
        'name': 'In Care Of Kelowna',
        'url': BASE,
        'description': 'The real estate resource for probate, power of attorney, and committee-of-estate home sales across Kelowna and the Central Okanagan.',
        'publisher': { '@id': BASE + '#business' },
        'inLanguage': 'en-CA'
      }
    ]
  });

  var PAGES = {
    '/committee-of-the-estate': 'Committee of the Estate',
    '/probate-explained': 'Probate in BC Explained',
    '/power-of-attorney-real-estate': 'Power of Attorney & Real Estate',
    '/executors-role': "The Executor's Role",
    '/lawyers-notaries': 'Estate Lawyers & Notaries',
    '/guide': 'Free Executor\'s Checklist',
    '/blog': 'Blog',
    '/team': 'Our Team',
    '/contact': 'Contact'
  };

  var HOMEPAGE_FAQS = [
    ["What does \"in care of\" mean in a real estate context?", "It's the situation where a home is being sold on someone else's behalf — by an executor settling an estate, an attorney acting under a Power of Attorney, or a Committee of the Estate appointed for someone who's incapacitated. Each has different legal requirements, and we work through all three regularly."],
    ["Do I need a lawyer before I can sell a home I'm an executor for?", "You generally need a Grant of Probate (or Grant of Administration if there's no will) before the property can be transferred, which does require working with an estate lawyer or notary — we work alongside yours throughout, and can recommend one if you don't have one yet."],
    ["Can a home be sold before probate is granted?", "In some cases a conditional listing can proceed while probate is in progress, with the sale completing once the Grant is issued — the right approach depends on your specific situation. This is exactly the kind of timing question we help executors work through."],
    ["What's the difference between a Power of Attorney sale and an estate sale?", "A Power of Attorney sale happens while the homeowner is still alive but someone else (the attorney) is authorized to act for them. An estate sale happens after the homeowner has passed, handled by the executor or administrator. The legal process is different for each."],
    ["Do you only work in Kelowna, or the wider area too?", "We're based in Kelowna and most active across the Central Okanagan — Kelowna, West Kelowna, Lake Country, and Peachland — with 500+ transactions in this specific space. For a property elsewhere in BC, we'll connect you with a trusted local specialist we know."]
  ];

  if (path === '/') {
    inject({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': BASE + '/#faq',
      'mainEntity': HOMEPAGE_FAQS.map(function (qa) {
        return { '@type': 'Question', 'name': qa[0], 'acceptedAnswer': { '@type': 'Answer', 'text': qa[1] } };
      })
    });
  }

  var breadcrumbItems = [{ '@type': 'ListItem', 'position': 1, 'name': 'In Care Of Kelowna', 'item': BASE + '/' }];
  if (PAGES[path]) {
    breadcrumbItems.push({ '@type': 'ListItem', 'position': 2, 'name': PAGES[path], 'item': BASE + path });
  }
  inject({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbItems
  });
})();
