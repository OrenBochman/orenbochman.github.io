---
layout: post
title: "Mermaid ERM Charts"
date:   2021-03-29 16:16:16 +0300
categories: blogging test
tags: ["charts"]
---

# Entity Relationship Diagram
<div class="mermaid">
erDiagram
    CUSTOMER ||--o{ ORDER : places
    CUSTOMER {
        string name
        string custNumber
        string sector
    }
    ORDER ||--|{ LINE-ITEM : contains
    ORDER {
        int orderNumber
        string deliveryAddress
    }
    LINE-ITEM {
        string productCode
        int quantity
        float pricePerUnit
    }
</div>
