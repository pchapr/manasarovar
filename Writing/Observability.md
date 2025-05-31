# This is a vision document for observability. We want to demonstrate the vision of observability for processing requests across a distributed system.

### Reading material
- [ Good Blog on Metrics logging and tracing and their intersections] https://peter.bourgon.org/blog/2017/02/21/metrics-tracing-and-logging.html
- [Good Video explaining metrics, tracing and logging] https://www.youtube.com/watch?v=O0XNSU-I-sg
- [Adding context to matrics using events] https://docs.splunk.com/observability/en/metrics-and-metadata/view-data-events.html
- [Creating detectors for alerts] https://docs.splunk.com/observability/en/alerts-detectors-notifications/create-detectors-for-alerts.html#create-detectors
- ![alt text](image.png)

# Observability Backlog
### Scenario we weould like to build:
#### Data Flow:
System A -> System B -> System C

|------------------------------|------------------------------|--------------|----------------------|
| Business Metric Name         | Business Metric Description  | Metric Type  | Example              |
| org.cm.activerequests.count  | Number of active requests    | Counter      | 10                   |
|------------------------------|------------------------------|------------------------------|------------------------------|
|------------------------------|------------------------------|------------------------------|------------------------------|
|------------------------------|------------------------------|------------------------------|------------------------------|
|------------------------------|------------------------------|------------------------------|------------------------------|
|------------------------------|------------------------------|------------------------------|------------------------------|



#### Custom Metrics:
- Number of requests per second
## Metrics

## Tracing

## Logging

