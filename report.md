
# ZENFOOD — Project Report

## Title
ZENFOOD — Online Food Ordering System

## Student
[M.ArsalanShiekh] — Roll: [63753] — Section: [SE-5]

## Introduction
ZENFOOD is a simulated online food ordering system that allows browsing a composite menu, adding items to a cart, placing orders, and tracking them. The project demonstrates several design patterns to make the system modular and maintainable.

## System Features
- Composite menu (categories + items)
- Command pattern for order actions
- Observer notifications for restaurant/delivery
- Facade API: browseMenu(), placeOrder(), trackOrder()
- Singleton OrderManager

## Design Patterns (explain per requirement)
### Composite
- Solves: hierarchical menu representation
- Implemented: backend/src/patterns/compositeMenu.js

### Command
- Solves: encapsulating order operations as objects
- Implemented: backend/src/patterns/commandOrder.js and orderService.js

### Observer
- Solves: notifying multiple parties on events
- Implemented: backend/src/patterns/observer.js

### Facade
- Solves: simplified API layer
- Implemented: backend/src/patterns/facade.js

### Singleton
- Solves: central order store
- Implemented: backend/src/patterns/orderManagerSingleton.js

## Implementation details
- Backend: Node.js, Express
- Frontend: React (create-react-app)
- DB: In-memory (OrderManager). Sample menu persisted in JSON.
- How to run: See README.md

## Screenshots
(Use the running app and take screenshots. Put them into /screenshots and commit.)

## Known issues and limitations
- No persistent DB for orders (use PostgreSQL for production)
- Notifications are console logs (replace with webhooks/push in real app)
- No authentication implemented (placeholder credentials only)

## Conclusion
This project is a working simulation meeting SCD lab requirements and demonstrates pattern usage clearly.
