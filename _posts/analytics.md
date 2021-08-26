
- Before deploying
  - light house 
  - web page tests
- Field data (CRUX)
    - chrome user experience reports 
    - page speed insights
- Analytics
    - web vitals metrics + big query export 


web vitals js library
- [web vitals js library](https://github.com/GoogleChrome/web-vitals)

- queries

```sql
# Subquery all Web Vitals events from the last 28 days
WITH web_vitals_events AS (
  SELECT event_name as metric_name, * EXCEPT(event_name, is_last_received_value) FROM (
    SELECT *, IF (ROW_NUMBER() OVER (
      PARTITION BY (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'metric_id')
      ORDER BY (SELECT COALESCE(value.double_value, value.int_value) FROM UNNEST(event_params) WHERE key = 'metric_value') DESC
    ) = 1, true, false) AS is_last_received_value
    FROM `bigquery_project_id.analytics_XXXXX.events_*`
    WHERE event_name in ('CLS', 'FID', 'LCP') AND
      _TABLE_SUFFIX BETWEEN FORMAT_DATE('%Y%m%d', DATE_SUB(CURRENT_DATE, INTERVAL 28 DAY)) AND FORMAT_DATE('%Y%m%d', DATE_SUB(CURRENT_DATE, INTERVAL 1 DAY))
  ) WHERE is_last_received_value
)
```



```sql
# Subquery all Web Vitals events from the last 28 days
WITH web_vitals_events AS (
  SELECT event_name as metric_name, * EXCEPT(event_name, is_last_received_value) FROM (
    SELECT *, IF (ROW_NUMBER() OVER (
      PARTITION BY (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'metric_id')
      ORDER BY (SELECT COALESCE(value.double_value, value.int_value) FROM UNNEST(event_params) WHERE key = 'metric_value') DESC
    ) = 1, true, false) AS is_last_received_value
    FROM `bigquery_project_id.analytics_XXXXX.events_*`
    WHERE event_name in ('CLS', 'FID', 'LCP') AND
      _TABLE_SUFFIX BETWEEN FORMAT_DATE('%Y%m%d', DATE_SUB(CURRENT_DATE, INTERVAL 28 DAY)) AND FORMAT_DATE('%Y%m%d', DATE_SUB(CURRENT_DATE, INTERVAL 1 DAY))
  ) WHERE is_last_received_value
)
# Main query logic
SELECT
  metric_name,
  APPROX_QUANTILES(metric_value, 100)[OFFSET(75)] AS p75,
  COUNT(1) as count
FROM (
  SELECT
    metric_name,
    ROUND((SELECT COALESCE(value.double_value, value.int_value) FROM UNNEST(event_params) WHERE key = "metric_value"), 3) AS metric_value,
  FROM web_vitals_events
)
GROUP BY 1
```

```sql
# Subquery all Web Vitals events from the last 28 days
WITH web_vitals_events AS (
  SELECT event_name as metric_name, * EXCEPT(event_name, is_last_received_value) FROM (
    SELECT *, IF (ROW_NUMBER() OVER (
      PARTITION BY (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'metric_id')
      ORDER BY (SELECT COALESCE(value.double_value, value.int_value) FROM UNNEST(event_params) WHERE key = 'metric_value') DESC
    ) = 1, true, false) AS is_last_received_value
    FROM `bigquery_project_id.analytics_XXXXX.events_*`
    WHERE event_name in ('CLS', 'FID', 'LCP') AND
      _TABLE_SUFFIX BETWEEN FORMAT_DATE('%Y%m%d', DATE_SUB(CURRENT_DATE, INTERVAL 28 DAY)) AND FORMAT_DATE('%Y%m%d', DATE_SUB(CURRENT_DATE, INTERVAL 1 DAY))
  ) WHERE is_last_received_value
)
# Main query logic
SELECT
  ROUND((SELECT COALESCE(value.double_value, value.int_value) FROM UNNEST(event_params) WHERE key = "metric_value"), 3) AS metric_value,
FROM web_vitals_events
WHERE metric_name = 'LCP'
ORDER BY metric_value DESC
```

```sql
# Subquery all Web Vitals events from the last 28 days
WITH web_vitals_events AS (
  SELECT event_name as metric_name, * EXCEPT(event_name, is_last_received_value) FROM (
    SELECT *, IF (ROW_NUMBER() OVER (
      PARTITION BY (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'metric_id')
      ORDER BY (SELECT COALESCE(value.double_value, value.int_value) FROM UNNEST(event_params) WHERE key = 'metric_value') DESC
    ) = 1, true, false) AS is_last_received_value
    FROM `bigquery_project_id.analytics_XXXXX.events_*`
    WHERE event_name in ('CLS', 'FID', 'LCP') AND
      _TABLE_SUFFIX BETWEEN FORMAT_DATE('%Y%m%d', DATE_SUB(CURRENT_DATE, INTERVAL 28 DAY)) AND FORMAT_DATE('%Y%m%d', DATE_SUB(CURRENT_DATE, INTERVAL 1 DAY))
  ) WHERE is_last_received_value
)
# Main query logic
SELECT
  page_path,
  APPROX_QUANTILES(metric_value, 100)[OFFSET(75)] AS LCP,
  COUNT(1) as count
FROM (
  SELECT
    REGEXP_SUBSTR((SELECT value.string_value FROM UNNEST(event_params) WHERE key = "page_location"), r'\.com(\/[^?]*)') AS page_path,
    ROUND((SELECT COALESCE(value.double_value, value.int_value) FROM UNNEST(event_params) WHERE key = "metric_value"), 3) AS metric_value,
  FROM web_vitals_events
  WHERE metric_name = 'LCP'
)
GROUP BY 1
ORDER BY count DESC
LIMIT 10
```


### Subquery all Web Vitals events from the last 28 days

```sql
# Subquery all Web Vitals events from the last 28 days
WITH web_vitals_events AS (
  SELECT event_name as metric_name, * EXCEPT(event_name, is_last_received_value) FROM (
    SELECT *, IF (ROW_NUMBER() OVER (
      PARTITION BY (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'metric_id')
      ORDER BY (SELECT COALESCE(value.double_value, value.int_value) FROM UNNEST(event_params) WHERE key = 'metric_value') DESC
    ) = 1, true, false) AS is_last_received_value
    FROM `bigquery_project_id.analytics_XXXXX.events_*`
    WHERE event_name in ('CLS', 'FID', 'LCP') AND
      _TABLE_SUFFIX BETWEEN FORMAT_DATE('%Y%m%d', DATE_SUB(CURRENT_DATE, INTERVAL 28 DAY)) AND FORMAT_DATE('%Y%m%d', DATE_SUB(CURRENT_DATE, INTERVAL 1 DAY))
  ) WHERE is_last_received_value
)
# Main query logic
SELECT
  page_path,
  APPROX_QUANTILES(metric_value, 100)[OFFSET(75)] AS CLS,
  COUNT(1) as count
FROM (
  SELECT
    REGEXP_SUBSTR((SELECT value.string_value FROM UNNEST(event_params) WHERE key = "page_location"), r'\.com(\/[^?]*)') AS page_path,
    ROUND((SELECT COALESCE(value.double_value, value.int_value) FROM UNNEST(event_params) WHERE key = "metric_value"), 3) AS metric_value,
  FROM web_vitals_events
  WHERE metric_name = 'CLS'
)
GROUP BY 1
HAVING count > 50 # Limit to relatively popular pages
ORDER BY CLS DESC
LIMIT 10
```

### # Subquery all Web Vitals events from the last 28 days


```sql
# Subquery all Web Vitals events from the last 28 days
WITH web_vitals_events AS (
  SELECT event_name as metric_name, * EXCEPT(event_name, is_last_received_value) FROM (
    SELECT *, IF (ROW_NUMBER() OVER (
      PARTITION BY (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'metric_id')
      ORDER BY (SELECT COALESCE(value.double_value, value.int_value) FROM UNNEST(event_params) WHERE key = 'metric_value') DESC
    ) = 1, true, false) AS is_last_received_value
    FROM `bigquery_project_id.analytics_XXXXX.events_*`
    WHERE event_name in ('CLS', 'FID', 'LCP') AND
      _TABLE_SUFFIX BETWEEN FORMAT_DATE('%Y%m%d', DATE_SUB(CURRENT_DATE, INTERVAL 28 DAY)) AND FORMAT_DATE('%Y%m%d', DATE_SUB(CURRENT_DATE, INTERVAL 1 DAY))
  ) WHERE is_last_received_value
)
# Main query logic
SELECT
  page_path,
  debug_target,
  APPROX_QUANTILES(metric_value, 100)[OFFSET(75)] AS CLS,
  COUNT(1) as count
FROM (
  SELECT
    REGEXP_SUBSTR((SELECT value.string_value FROM UNNEST(event_params) WHERE key = "page_location"), r'\.com(\/[^?]*)') AS page_path,
    (SELECT value.string_value FROM UNNEST(event_params) WHERE key = "debug_target") as debug_target,
    ROUND((SELECT COALESCE(value.double_value, value.int_value) FROM UNNEST(event_params) WHERE key = "metric_value"), 3) AS metric_value,
    *
  FROM web_vitals_events
  WHERE metric_name = 'CLS'
)
GROUP BY 1, 2
HAVING count > 50 # Limit to relatively popular pages
ORDER BY CLS DESC
```

https://web.dev/vitals-ga4/

- dash board performances
- cost
- preprocessing & materializing the data


1. scheduled query in bigquery to get regular updates
1. join with 1st party data
1. report code version
