export const Ga4Json = {
  cookies: {
    _ga: {
      value: "$IF(LINKER_PARAM(_gl, _ga),GA1.0.LINKER_PARAM(_gl, _ga),)"
    }
  },
  linkers: {
    _gl: {
      enabled: true,
      ids: {
        _ga: "${clientId}"
      },
      proxyOnly: false
    }
  },
  triggers: {
    page_view: {
      enabled: "${DEFAULT_PAGEVIEW_ENABLED}",
      on: "visible",
      request: "ga4Pageview"
    },
    doubleClick: {
      enabled: "${SEND_DOUBLECLICK_BEACON}",
      on: "visible",
      request: "ga4Dc"
    },
    enhancedMeasurementScroll: {
      enabled: "${ENHANCED_MEASUREMENT_SCROLL}",
      on: "scroll",
      request: "ga4Event",
      vars: {
        ga4_event_name: "scroll"
      },
      extraUrlParams: {
        event__num_percent_scrolled: "${verticalScrollBoundary}"
      },
      scrollSpec: {
        verticalBoundaries: [90],
        horizontalBoundaries: [],
        useInitialPageSize: false
      }
    },
    webVitals: {
      enabled: "${WEBVITALS_TRACKING}",
      on: "timer",
      timerSpec: {
        interval: 5,
        maxTimerLength: 4.99,
        immediate: false
      },
      request: "ga4Event",
      vars: {
        ga4_event_name: "web_vitals"
      },
      extraUrlParams: {
        event__num_first_contenful_paint: "FIRST_CONTENTFUL_PAINT",
        event__num_first_viewport_ready: "FIRST_VIEWPORT_READY",
        event__num_make_body_visible: "MAKE_BODY_VISIBLE",
        event__num_largest_contentful_paint: "LARGEST_CONTENTFUL_PAINT",
        event__num_cumulative_layout_shift: "CUMULATIVE_LAYOUT_SHIFT"
      }
    },
    performanceTiming: {
      enabled: "${PERFORMANCE_TIMING_TRACKING}",
      on: "visible",
      request: "ga4Event",
      sampleSpec: {
        sampleOn: "${clientId}",
        threshold: 100
      },
      vars: {
        ga4_event_name: "performance_timing"
      },
      extraUrlParams: {
        event__num_page_load_time: "${pageLoadTime}",
        event__num_domain_lookup_time: "${domainLookupTime}",
        event__num_tcp_connect_time: "${tcpConnectTime}",
        event__num_redirect_time: "${redirectTime}",
        event__num_server_response_time: "${serverResponseTime}",
        event__num_page_download_time: "${pageDownloadTime}",
        event__num_content_download_time: "${contentLoadTime}",
        event__num_dom_interactive_time: "${domInteractiveTime}"
      }
    }
  },
  vars: {
    documentLocation:
      "$IF($EQUALS($DEFAULT(${OVERRIDE_PAGE_LOCATION}, EMPTY), EMPTY),SOURCE_URL, ${OVERRIDE_PAGE_LOCATION})",
    documentTitle: "$IF($EQUALS($DEFAULT(${OVERRIDE_PAGE_TITLE}, EMPTY), EMPTY),${title}, ${OVERRIDE_PAGE_TITLE})",
    clientId: "CLIENT_ID(AMP_ECID_GOOGLE,,_ga,true)",
    dataSource: "AMP",
    isDebugEnabled: "$IF($EQUALS(QUERY_PARAM(_dbg),1), _dbg, __dbg)",
    endpoint:
      "$IF(${DISABLE_REGIONAL_DATA_COLLECTION},https://${GA4_ENDPOINT_HOSTNAME}, https://$IF($EQUALS($MATCH(${timezoneCode}, Europe, 0),Europe), $REPLACE(${GA4_ENDPOINT_HOSTNAME},www.google-analytics.com,region1.google-analytics.com), ${GA4_ENDPOINT_HOSTNAME}))",
    ga4SessionCookie:
      "$CALC(SESSION_TIMESTAMP, 1000, divide, true).SESSION_COUNT.$IF($EQUALS(SESSION_ENGAGED, true),1,0).$CALC(TIMESTAMP, 1000, divide, true).0.0.0"
  },
  extraUrlParams: {
    sid: "$CALC(SESSION_TIMESTAMP, 1000, divide, true)",
    sct: "SESSION_COUNT",
    seg: "$IF($EQUALS(SESSION_ENGAGED, true),1,0)",
    _et: "$CALC(INCREMENTAL_ENGAGED_TIME,1000, multiply)",
    gcs: "$IF($EQUALS(${GOOGLE_CONSENT_ENABLED},TRUE),G10$IF($EQUALS(CONSENT_STATE,sufficient),1,0),)",
    uaa: "${uach(architecture)}",
    uab: "${uach(bitness)}",
    uafvl: "${uach(fullVersionList)}",
    uamb: "$IF($EQUALS($DEFAULT(${uach(mobile)}, EMPTY), EMPTY),,$IF($EQUALS(${uach(mobile)}, false),0,1))",
    uam: "${uach(model)}",
    uap: "${uach(platform)}",
    uapv: "${uach(platformVersion)}",
    uaw: "$IF($EQUALS($DEFAULT(${uach(wow64)}, EMPTY), EMPTY),,$IF($EQUALS(${uach(wow64)}, false),0,1))",
    "ep.amp_hostname": "${ampdocHost}"
  },
  extraUrlParamsReplaceMap: {
    user__str_: "up.",
    user__num_: "upn.",
    event__str_: "ep.",
    event__num_: "epn.",
    is_conversion: "_c",
    campaign_source: "cs",
    campaign_medium: "cm",
    campaign_name: "cn",
    campaign_content: "cc",
    campaign_term: "ck",
    campaign_id: "ci",
    ignore_referral: "ir",
    content_group: "ep.content_group"
  },
  requestOrigin: "${endpoint}",
  requests: {
    ga4userId: "$IF(${USER_ID}, uid,__nuid)",
    ga4IsFirstVisit:
      "$IF($EQUALS($CALC(SESSION_COUNT, $CALC($CALC(${timestamp}, 1000, divide, true),$CALC(SESSION_TIMESTAMP, 1000, divide, true), subtract), add),1), _fv, __nfv )",
    ga4IsSessionStart:
      "$IF($EQUALS($CALC($CALC(${timestamp}, 1000, divide, true),$CALC(SESSION_TIMESTAMP, 1000, divide, true), subtract),0), _ss, __nss)",
    ga4SharedPayload:
      "v=2&tid=${GA4_MEASUREMENT_ID}&ds=${dataSource}&_p=${pageViewId}&cid=${clientId}&ul=${browserLanguage}&sr=${screenWidth}x${screenHeight}&_s=${requestCount}&dl=${documentLocation}&dr=${externalReferrer}&dt=${documentTitle}&${ga4IsFirstVisit}=1&${ga4IsSessionStart}=1&${isDebugEnabled}=1&${ga4userId}=${USER_ID}",
    ga4Pageview: {
      baseUrl: "/g/collect?${ga4SharedPayload}&en=page_view"
    },
    ga4Event: {
      baseUrl: "/g/collect?${ga4SharedPayload}&en=${ga4_event_name}"
    },
    ga4Dc: {
      origin: "https://stats.g.doubleclick.net",
      baseUrl: "/g/collect?v=2&tid=${GA4_MEASUREMENT_ID}&cid=${clientId}&aip=1"
    }
  }
};
