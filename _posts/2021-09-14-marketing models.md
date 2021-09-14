---
layout: post
title: Marketing Research Models
date: 2021-08-29 00:00:00 +0300
description: Marketing Research Models
img: cover/chaotic-time-series.jpeg
fig-caption: # Marketing Research models
tags: [PPC, data science, digital marketing, quantitative marketing, intelligence] 
---

{{TOC}}

# What are the more common types of research ?
	
1. [Customer decision journey](https://www.mckinsey.com/business-functions/marketing-and-sales/our-insights/the-consumer-decision-journey) 2009 article. 
    Terms: [touch points],[digital channels], [customer loyalty], [Integrated marketing]
2. Pricing.
3. Competitive Analysis.
4. Brand awareness.
5. Marketing message testing.
6. Market segmentation.
7. Product development.

# What are the main research methods ?

1. Observation
1. Focus groups
1. Surveys
1. Interviews
1. Social media listening
1. Experiments and field trials
1. Competitive analysis
1. Analyze sales data
1. Augmenting from Commercial and Public domain databases

# Software 

- Excel
- LIMDEP
- SAS
- SPSS
- R
- Python

# Terms

- [Touch Point][Touch Point]
    : Touch Point
- Market Intelligence
	: inputs that determine the market opportunity, surface key trends and shape the market development strategy.
- Go-To-Market
	: a plan for launching products into a new market.
- Total Addressable Market
	: the amount of revenue potentially available to a product or service.
- Serviceable Available Market
	: the percentage of the market that can realistically be served by your product or service.
- Market Share
	: The percentage of the total addressable market you can realistically target, based on the number of competitors in the category.



Models

Overview


Adbudg
Advisor
Assessor
Callplan
Choice-based segmentation
Competitive advertising
Competitive bidding
Conglomerate, Inc. promotional analysis
GE: Portfolio analysis
Generalized Bass Model
Learning curve pricing
PIMS:Strategy model
Promotional spending analysis
Sales resource allocation model
Value-in-use pricing
Visual response modeling
Yield management for hotels

Non-Excel Models
ADCAD: Ad copy design
Cluster Analysis
Conjoint Analysis
Multinomial logit analysis
Positioning Analysis

Non-Excel Models by Commercial Vendors
Analytic hierarchy process
Decision tree analysis
Geodemographic site planning
Neural net for forecasting

Why Don't More Managers Use Decision Models?
-  Mental models are often good enough.
-  Models are incomplete.
-  Models require precision.
-  Models emphasize analysis; Managers prefer actions.
-  They haven't been exposed to Marketing Engineering.

Market Response Models
Inputs:
	Price
	Advertising spending
	Promotional spending
Outputs:
	 Sales
	 Market Share
	 Profit
	 Awareness, etc.

## Fractional Root response model

@@Y= a + bX^C@@

## Exponential response model

@@Y= ae^{bx}@@

## Modified Exponential response model

@@Y= a(1+e^{bx})+c @@

## Logistic Aggregate response model

@@Y = \frac{a}{1+e^{-(b+cx)}} +d @@

## Logistic response model

@@ Y = b+ (a-b)\frac{X^c}{d+X^c} +d @@

The model is S-shaped for c>1 and concave for 0 < c < 1. It is bounded between b (lower bound) and a (upper bound). The model is widely used to model response to advertising and sales. 

## The Gompertz Aggregate response model

@@Y = ab^{cx} + d, a > 0, 1 > b > 0, c <1, @@

A less widely used S-shaped function is the following

Both the Gompertz and logistic curves lie between a lower bound and an upper bound; the Gompertz curve involves a constant ratio of successive first differences of log Y, whereas the logistic curve involves a constant ratio of successive first differences of 1/Y. (The better known logistic function is used more often than the Gompertz because it is easier to estimate.)

## Individual response models

@@Y= a + bX^C@@

Standard linear Regression
- used to model a continuous dependent variable like sales
- least square estimation
- maximum likelihood 
- sales Y_t

@Y_t ~ N(\mu,\sigma^2)@
@Y_t ~ N(\beta_0+\beta_1 x_1,\sigma^2)@
@Y_t ~ N(\beta_0+\beta_1 x_1,t + ... + \beta_k x_k,t,\sigma^2)@
@Y_t ~ N(X_t \beta,\sigma^2)@ or 

@@Y_y = X_t\beta + \epsilon_t  \\
\epsilon ~  N(0,\sigma^2)@@

where x_i are explanatory variables like price, advertising, promotion

regression is evaluated using adjuster R^2, AIC, BIC

AutoRegression and Vector AutoRegression (VAR)

arise when prices at time T depend on sales at time T-1.

log S_t = \mu_1 + \rho_1 log S_{t-1}+\beta_ 1 log P_t +\epsilon_{1,t}
log P_t = \mu_2 + \rho_2 log P_{t-1}+\beta_ 1 log S_t +\epsilon_{1,t}

also when studing market share

Logit and Probit models for estimating a binomeial dependent variable



## Bass diffusion model

### Task 

Model designed to answer the question: How many customers will eventually adopt the
new product and when?

### Assumption

- Diffusion process is binary (consumer either adopts, or waits to adopt)
- Constant maximum potential number of buyers (m)
- Eventually, all m will buy the product 
- No repeat purchase, or replacement purchase
- The impact of the word-of-mouth is independent of adoption time
- Innovation is considered independent of substitutes 
- The marketing strategies supporting the innovation are not explicitly included

### Formulation

Innovators are buyers who are triggered by advertising
- Imitators are buyers whose  are triggered by word of mouth (i.e. by existing buyers)

N(T) = p * Remaining Protenial

- [Bass diffusion model](https://en.wikipedia.org/wiki/Bass_diffusion_model#:~:text=The%20Bass%20model%20or%20Bass,of%20a%20new%20product%20interact.) 1969
- Generalised Bass model (with pricing)
- Weibull distribution
- Shifted Gompertz distribution

Tobit model

[Tobit model](https://en.wikipedia.org/wiki/Tobit_model)

- e.g. a left censored regression model  - i.e. y cannot be negative or is excuded from a range.

demand analysis of brands

# Advertising

## Advertising Response model (1957)

Vidale and Wolfe (1957) developed a classical advertising response model to explain the rate of change of sales when advertising had both immediate and lagged effects:

@@ \frac{ds}{dt} = \rho u(M-s)- \delta s@@

where: | is
--|----
s | sales volume |
u | advertising effort|
r | ad effectiveness parameter |
d | sales decay parameter |
M |  total market size |

## Sethi model (1983)

[Sethi model](https://en.wikipedia.org/wiki/Sethi_model)

extensions:

	• Competitive extensions-Nash differential games
	• Empirical testing of the Sethi model and extensions
	• Stackelberg differential games 
	• The Sethi durable goods model


AdBudg



https://faculty.biu.ac.il/~fruchtg/829/lec/7.pdf

# Advertising Budgeting in Practice

## Affordable method 
Easy to apply. 
Weakness: no relationship between sales and expenditures.

## Objective/task method 

This is a scientific method for setting an advertising budget. It considers a company's environment and requirements. IT guides the marketing manager to develop his promotional budget by 
1. defining specific objectives.
2. list the tasks they require 
3. estimating the costs of each task.

The sum of these costs is the proposed amount for advertising budget.

The method is based on the relationship between the objectives and the task to achieve these objectives. The costs of various advertising activities to be performed to achieve marketing objectives constitute advertising budget.

- Limitation: no indication how to choose the objectives and how to evaluate them and decide if they worth
the cost of attaining them.


## Percent of sales
- Advantages:
    - Easy to use, and it encourages managers to think in terms of the relationship between advertising cost and sales.
    - Encourages stability if the competitive companies spend the same percentage. 
- Limitation: 
    - Does not provide a logical basis for selecting the specific percentage of sales to use.

## Competitive parity method 

As competition is a leading factor affecting marketing performance, competitors’ advertising activities and costs are evaluated for setting a baseline for the advertizing budget. The advertising budget is fixed as a response to the advertising strategy adopted by competitors.

Thus, competitive factor is given more importance in deciding advertising budget. 

Criticism:

- There may be limited data on the competition.
- As firms differ significantly from their competitors it may not be advisable to follow the competitors blindly. 

# Model-based approaches

## ADBUDG (1970)

assumptions

- If advertising is cut to zero, brand share will decrease, but there is a floor (min), on how much share will fall from its initial value by the end of the period 
- If advertising is increased, say to something that could be called saturation, brand share will increase but there is a ceiling (max), on how much can be achieved by the end of one period.
- There is some advertising rate that will maintain initial share.
- An estimate can be made by data analysis or managerial judgement of the effect on share by the end of one period of a 20% increase in advertising over the maintenance rate.


Mahajan and Muller (1986)

ADBUDG is an advertising budgeting procedure which is applicable to brands which have considerable history of advertising and market share response to advertising, including the media and creative effectiveness of that advertising. Budgets are determined quarterly for one fiscal year

Pricing Decisions

Profit = Revenue -Total cost P = R-TC
Directly: Revenue = Unit price x Quantity sold R=P x q
Indirectly: Total cost = Unit cost x Quantity sold TC=c x q
But: Quantity is a function of price (the demand curve) q=q(P)

https://faculty.biu.ac.il/~fruchtg/829/lec/8.pdf

These five factors must be taken into account in pricing decisions:

1. The objectives of the organization
2. Consumers willingness to pay for the product
3. The costs of producing and marketing the product
4. Competition
5. Changes in 2,3, and 4 over time

# Competition Models

These arise in economics and are while the provide interesting strategic and general results about competition, they are of little practical application in marketing. 

I list these for completeness and in the hope that I can add more useful models here in the future.

## Monopoly


## Oligopoly

An oligopoly is a market characterized by a small number of firms who realize they are interdependent in their pricing and output policies. The number of firms is small enough to give each firm some market power. Oligopolistic competition can give rise to wide-ranging outcomes, in some situations, companies may employ restrictive trade practices such as collusion or  market sharing  to restrict production and to inflate prices in much the same way that a monopoly does. Whenever there is a formal agreement for such collusion, between companies that usually compete with one another, this practice is known as a cartel.

### Examples:
Globally: OPEC
In Israel there are many examples: Banks, Cellphone, Foreign Calls, Fuel, TV, Retail suppliers , car importers, all form oligopolies.

### Characteristics:
• Profit maximization conditions
• Firms have the ability to set price or quantity or quallity
• Barriers to entry are high. Regulation favor existing firms
• Small number of firms so that each firms action influences the others
• Long run profits 
• Perfect knowledge (internal) interfirm knowldge mat be incomplete


Oligopoly theory makes heavy use of game theory to model the behavior of oligopolies:

Stackelberg's duopoly where firms move sequentially.
Cournot's duopoly where firms simultaneously choose quantities
Bertrand's oligopoly where firms simultaneously choose prices.

When compared with Cournot and Bertrand's model, it can be seen that price competition is more aggressive and competitive, and also it is easier to sustain collusion under price competition

### Comparison of oligopoly models,

- The aggregate Stackelberg output is greater than the aggregate Cournot output, but less than the aggregate Bertrand output. 
- The Stackelberg price is lower than the Cournot price, but greater than the Bertrand price.
- The Stackelberg consumer surplus is greater than the Cournot consumer surplus, but lower than the Bertrand consumer surplus.
- The aggregate Stackelberg output is greater than pure monopoly or cartel, but less than the perfectly competitive output.
- The Stackelberg price is lower than the pure monopoly or cartel price, but greater than the perfectly competitive price.

## Stackelberg competition Model 1934

[Stackelberg_competition](https://en.wikipedia.org/wiki/Stackelberg_competition)

In game theory terms, the players of this game are a leader and a follower and they compete on quantity. The Stackelberg leader is sometimes referred to as the Market Leader.

A firms may engage in Stackelberg competition if it has some sort of advantage enabling it to move first to become a market leaader. More generally, the leader must have commitment power.

Moving observably first is the most obvious means of commitment: once the leader has made its move, it cannot undo it - it is committed to that action. Moving first may be possible if the leader was the incumbent monopoly of the industry and the follower is a new entrant. Holding excess capacity is another means of commitment.

The solution concept used is a sub perfect nash equilibrium.

## Cournot competition

- [Cournot competition](https://en.wikipedia.org/wiki/Cournot_competition)

## Bertrand competition

- [Bertrand competition](https://en.wikipedia.org/wiki/Bertrand_competition)

## Bertrand–Edgeworth model

- [Bertrand–Edgeworth model](https://en.wikipedia.org/wiki/Bertrand%E2%80%93Edgeworth_model)

# Journals

• Marketing Science 
• Journal of Marketing research
• Journal of Consumer research
• International journal of research in marketing

# Books

- Maddala, G. S. (1983), [Limited Dependent and Qualitative Variables in Econometrics](), vol. 3 of Econometric Society Monographs, Cambridge University Press, Cambridge.
- Ben-Akiva and Lerman (1985) [Discrete Choice Analysis: Theory and Application to Travel Demand]()
- Cramer, J. S. (1991), [The Logit Model: An Introduction for Economists](), Edward Arnold, NewYork.
- Long, J. S. (1997), [Regression Models for Categorical and Limited Dependent Variables](), Sage, Thousand Oaks, CA.
- Franses and Pap 2001 [Quantitative Models in Marketing Research](https://cloudflare-ipfs.com/ipfs/bafykbzacebuu2pep4athgzifgmikzqggchln6kao7mys2ykco7ocy44wmpckq?filename=Philip%20Hans%20Franses%2C%20Richard%20Paap%20-%20Quantitative%20models%20in%20marketing%20research-Cambridge%20University%20Press%20%282001%29.pdf)  978-0521143653
- Farris, Paul W.; Neil T. Bendle; Phillip E. Pfeifer; David J. Reibstein (2010). [Marketing Metrics: The Definitive Guide to Measuring Marketing Performance](). Upper Saddle River, NJ: Pearson Education, Inc. ISBN 0137058292. 
- [Marketing Dictionary](https://marketing-dictionary.org/)

# Bibliography  

(based on  Franses and Pap 2001)

- Agresti, A. (1999), Modelling Ordered Categorical Data: Recent Advances and Future Challenges, Statistics in Medicine, 18, 2191–2207.
- Akaike, H. (1969), Fitting Autoregressive Models for Prediction, Annals of the Institute of Statistical Mathematics, 21, 243–247.
- Allenby, G. M. and P. E. Rossi (1999), Marketing Models of Consumer Heterogeneity, Journal of Econometrics, 89, 57–78.
- Allenby, G. M., R. P. Leone, and L. Jen (1999), A Dynamic Model of Purchase Timing with Application to Direct Marketing, Journal of the American Statistical Association, 94, 365–374.
- Amemiya, T. (1981), Qualitative Response Models: A Survey, Journal of Economic Literature, 19, 483–536. (1985), Advanced Econometrics, Blackwell, Oxford.
- Ben-Akiva, M. and S. R. Lerman (1985), Discrete Choice Analysis: Theory and Application to Travel Demand, vol. 9 of MIT Press Series in Transportation Studies, MIT Press, Cambridge, MA.
- Bera, A. K. and C. M. Jarque (1982), Model Specification Tests: A Simultaneous Approach, Journal of Econometrics, 20, 59–82.
- Berndt, E. K., B. H. Hall, E. Hall, and J. A. Hausman (1974), Estimation and Inference in Non-linear Structural Models, Annals of Economic and Social Measurement, 3, 653–665.
- Bolduc, D. (1999), A Practical Technique to Estimate Multinomial Probit Models, Transportation Research B, 33, 63–79.
- Bolton, R. N. (1998), A Dynamic Model of the Duration of the Customer’s Relationship with a Continuous Service Provider: The Role of Satisfaction, Marketing Science, 17, 45–65.
- Borsch-Supan, A. and V. A. Hajivassiliou (1993), Smooth Unbiased Multivariate Probability Simulators for Maximum Likelihood Estimation of Limited Dependent Variable Models, Journal of Econometrics, 58, 347–368.
- Bowman, K. O. and L. R. Shenton (1975), Omnibus Test Contours for Departures from Normality Based on b1=2 1 and b2, Biometrika, 62, 243–250.
- Brant, R. (1990), Assessing Proportionality in the Proportional Odds Model for Ordinal Logistic Regression, Biometrika, 46, 1171–1178.
- Bult, J. R. (1993), Semiparametric versus Parametric Classification Models: An Application to Direct Marketing, Journal of Marketing Research, 30, 380–390. 
- Bunch, D. S. (1991), Estimatibility in the Multinomial Probit Model, Transportation Research B, 25B, 1–12.
- Chintagunta, P. K. and A. R. Prasad (1998), An Empirical Investigation of the ‘‘Dynamic McFadden’’ Model of Purchase Timing and Brand Choice: Implications for Market Structure, Journal of Business & Economic Statistics, 16, 2–12.
- Chintagunta, P. K., D. C. Jain, and N. J. Vilcassim (1991), Investigating Heterogeneity in Brand Preferences in Logit Models for Panel Data, Journal of Marketing Research, 28, 417–428.
- Cooper, L. G. (1993), Market-Share Models, in J. Eliashberg and G. L. Lilien (eds.), Handbooks in Operations Research and Management Science, vol. 5, ch. 6, North-Holland, Amsterdam, pp. 259–314.
- Cooper, L. G. and M. Nakanishi (1988), Market Share Analysis: Evaluating Competitive Marketing Effectiveness, Kluwer Academic Publishers, Boston.
- Cramer, J. S. (1991), The Logit Model: An Introduction for Economists, Edward Arnold, NewYork.
- Cramer, J. S. and G. Ridder (1991), Pooling States in the Multinomial Logit Model, Journal of Econometrics, 47, 267–272.
- Cramer, J. S., P. H. Franses, and E. Slagter (1999), Censored Regression Analysis in Large Samples with Many Zero Observations, Econometric Institute Report 9939/A, Erasmus University Rotterdam.
- Daganzo, C. (1979), Multinomial Probit: The Theory and Its Application to Demand Forecasting, Academic Press, NewYork.
- Davidson, R. and J. G. MacKinnon (1993), Estimation and Inference in Econometrics, Oxford University Press, Oxford.
- Dekimpe, M. G. and D. M. Hanssens (1995), The Persistence of Marketing Effects on Sales, Marketing Science, 14, 1–21.
- DeSarbo, W. S. and J. Choi (1999), A Latent Structure Double Hurdle Regression Model for Exploring Heterogeneity in Consumer Search Patterns, Journal of Econometrics, 89, 423–455.
- Doney, P. M. and J. P. Cannon (1997), An Examination of the Nature of Trust in Buyer–Seller Relationships, Journal of Marketing, 61, 35–51.
- Elbers, E. and G. Ridder (1982), True and Spurious Duration Dependence: The Identifiability of the Proportional Hazard Model, Reviewof Economic Studies, 49, 403–411.
- Erdem, T. and M. P. Keane (1996), Decision-making under Uncertainty: Capturing Dynamic Brand Choice Processes in Turbulent Consumer Good Markets, Marketing Science, 15, 1–20.
- Fok, D., P. H. Franses, and J. S. Cramer (1999), Ordered Logit Analysis for Selectively Sampled Data, Econometric Institute Report 9933/A, Erasmus University Rotterdam.
- Franses, P. H. (1998), Time Series Models for Business and Economic Forecasting, Cambridge University Press, Cambridge.
- Geweke, J. F., M. P. Keane, and D. E. Runkle (1994), Alternative Computation Approaches to Statistical Inference in the Multinomial Probit Model, Review of Economic Studies, 76, 609–632. 
- (1997), Statistical Inference in the Multinomial Multiperiod Probit Model, Journal of Econometrics, 80, 125–165.
- Goldberger, A. S. (1964), Econometric Theory, Wiley, NewYork.
- Gonul, F. and K. Srinivasan (1993), Modeling Multiple Sources of Heterogeneity in Multinomial Logit Models: Methodological and Managerial Issues, Marketing Science, 12, 213–229.
- Gonul, F., B.-D. Kim, and M. Shi (2000), Mailing Smarter to Catalog Customers, Journal of Interactive Marketing, 14, 2–16.
- Gourieroux, C. and A. Monfort (1995), Statistics and Econometric Models, vol. 2, Cambridge University Press, Cambridge.
- Greene, W. H. (1995), LIMDEP, Version 7.0: User’s Manual, Econometric Software, Bellport, NewYork. (2000), Econometric Analysis, 4th edn., Prentice Hall, NewJersey.
- Guadagni, P. E. and J. D. C. Little (1983), A Logit Model of Brand Choice Calibrated on Scanner Data, Marketing Science, 2, 203–238.
- Gupta, S. (1991), Stochastic Models of Interpurchase Time with Time-Dependent Covariates, Journal of Marketing Research, 28, 1–15.
- Hausman, J. A. and D. McFadden (1984), Specification Tests for the Multinomial Logit Model, Econometrica, 52, 1219–1240. 
- Hausman, J. A. and D. Wise (1978), A Conditional Probit Model for Qualitative Choice: Discrete Decisions Recognizing Interdependence and Heterogenous Preferences, Econometrica, 45, 319–339.
- Hausman, J. A., A. W. Lo, and A. C. MacKinlay (1992), An Ordered Probit Analysis of Transaction Stock-Prices, Journal of Financial Economics, 31, 319–379.
- Heckman, J. J. (1976), The Common Structure of Statistical Models of Truncation, Sample Selection and Limited Dependent Variables and a Simple Estimator for Such Models, Annals of Economic and Social Measurement, 5, 475–492.
- Heckman, J. J.  (1979), Sample Selection Bias as a Specification Error, Econometrica, 47, 153–161.
- Helsen, K. and D. C. Schmittlein (1993), Analyzing Duration Times in Marketing: Evidence for the Effectiveness of Hazard Rate Models, Marketing Science, 11, 395–414.
- Hensher, D., J. Louviere, and J. Swait (1999), Combining Sources of Preference Data, Journal of Econometrics, 89, 197–222. 
- Jain, D. C. and N. J. Vilcassim (1991), Investigating Household Purchase Timing Decisions: A Conditional Hazard Function Approach, Marketing Science, 10, 1–23.
- Jain, D. C., N. J. Vilcassim, and P. K. Chintagunta (1994), A Random-Coefficients Logit Brand-Choice Model Applied to Panel Data, Journal of Business & Economic Statistics, 12, 317–328.
- Johnson, R. A. and D. W. Wichern (1998), Applied Multivariate Statistical Analysis, 4th edn., Prentice Hall, NewJersey. 
- Jonker, J.-J. J., R. Paap, and P. H. Franses (2000), Modeling Charity Donations: Target Selection, Response Time and Gift Size, Econometric Institute Report 2000-07/A, Erasmus University Rotterdam.
- Joreskog, K. G. and D. Sorbom (1993), LISREL 8: Structural Equation Modeling with the SIMPLIS Command Language, Erlbaum, Hillsdale, NJ.
- Judge, G. G., W. E. Griffiths, R. C. Hill, H. Lu¨tkepohl, and T.-C. Lee (1985), The Theory and Practice of Econometrics, 2nd edn., John Wiley, NewYork.
- Kalbfleisch, J. D. and R. L. Prentice (1980), The Statistical Analysis of Failure Time Data, John Wiley, NewYork.
- Kamakura, W. A. and G. J. Russell (1989), A Probabilistic Choice Model for Market Segmentation and Elasticity Structure, Journal of Marketing Research, 26, 379–390.
- Katahira, H. (1990), Perceptual Mapping Using Ordered Logit Analysis, Marketing Science, 9, 1–17. 
- Keane, M. P. (1992), A Note on Identification in the Multinomial Probit Model, Journal of Business & Economic Statistics, 10, 193–200.
- Kekre, S., M. S. Khrishnan, and K. Srinivasan (1995), Drivers of Customer Satisfaction for Software Products – Implications for Design and Service Support, Management Science, 41, 1456–1470.
- Kiefer, N. M. (1985), Specification Diagnostics Based on Laguerre Alternatives for Econometric Models of Duration, Journal of Econometrics, 28, 135–154.
- (1988), Economic Duration Data and Hazard Functions, Journal of Economic Literature, 26, 646–679.
- Knapp, L. and T. Seaks (1992), An Analysis of the Probability of Default on Federally Guaranteed Student Loans, Reviewof Economics and Statistics, 74, 404–411.
- Laitila, T. (1993), A Pseudo-R2 Measure for Limited and Quantitative Dependent Variable Models, Journal of Econometrics, 56, 341–356.
- Lancaster, T. (1990), The Econometric Analysis of Transition Data, vol. 17 of Econometric Society Monographs, Cambridge University Press, Cambridge.
- Lawless, J. F. (1982), Statistical Models and Methods for Lifetime Data, Wiley, New York.
- Lee, L.-F. and G. S. Maddala (1985), The Common Structure Test for Selectivity Bias, Serial Correlation, Heteroscedasticity and Non-normality in the Tobit Model, International Economic Review, 26.
- Leeflang, P. S. H., D. R. Wittink, M. Wedel, and P. A. Naert (2000), Building Models for Marketing Decisions, International Series in Quantitative Marketing, Kluwer Academic Publishers, Boston.
- Lehmann, D. R., S. Gupta, and J. H. Steckel (1998), Marketing Research, AddisonWesley, Reading, MA.
- Long, J. S. (1997), Regression Models for Categorical and Limited Dependent Variables, Sage, Thousand Oaks, CA.
- Lutkepohl, H. (1993), Introduction to Multiple Time Series Analysis, 2nd edn., Springer Verlag, Berlin.
- McCulloch, R. and P. E. Rossi (1994), An Exact Likelihood Analysis of the Multinomial Probit Model, Journal of Econometrics, 64, 207–240.
- McFadden, D. (1973), Conditional Logit Analysis of Qualitative Choice Behavior, in P. Zarembka (ed.), Frontiers in Econometrics, ch. 4, Academic Press, New York, pp. 105–142.
- (1974), The Measurement of Urban Travel Demand, Journal of Public Economics, 3, 303–328.
- (1984), Econometric Analysis of Qualitative Response Models, in Z. Griliches and M. Intriligator (eds.), Handbook of Econometrics, vol. 2, ch. 18, NorthHolland, Amsterdam, pp. 1395–1457.
- (1989), A Method of Simulated Moments for Estimation of Discrete Response Models without Numerical Integration, Econometrica, 57, 995–1026.
- McFadden, D., C. Puig, and D. Kirschner (1977), Determinants of the Long-run Demand for Electricity, Proceedings of the American Statistical Association (Business and Economics Section), 109–117.
- McKelvey, R. D. and W. Zavoina (1975), A Statistical Model for the Analysis of Ordinal Level Dependent Variables, Journal of Mathematical Sociology, 4, 103–120.
- Maddala, G. S. (1983), Limited Dependent and Qualitative Variables in Econometrics, vol. 3 of Econometric Society Monographs, Cambridge University Press, Cambridge.
- Mahajan, V., E. Muller, and F. M. Bass (1993), New-Product Diffusion Models, in J Eliashberg and G. L. Lilien (eds.), Handbooks in Operations Research and Management Science, vol. 5, ch. 8, North-Holland, Amsterdam, pp. 349–408.
- Malhotra, N. K. (1984), The Use of Linear Logit Models in Marketing Research, Journal of Marketing Research, 21, 20–31.
- Manski, C. and S. R. Lerman (1977), The Estimation of Choice Probabilities from Choice-Based Samples, Econometrica, 45, 1977–1988.
- Murphy, A. (1996), Simple LM Tests of Mis-specification for Ordered Logit Models, Economics Letters, 52, 137–141.
- Newey, W. K. (1985), Maximum Likelihood Specification Testing and Conditional Moment Tests, Econometrica, 53, 1047–1070.
- Olsen, R. (1978), A Note on the Uniqueness of the Maximum Likelihood Estimator for the Tobit Model, Econometrica, 46, 1211–1215.
- Paap, R. and P. H. Franses (2000), A Dynamic Multinomial Probit Model for Brand Choice with Different Long-run and Short-run Effects of Marketing-Mix Variables, Journal of Applied Econometrics, 15, 717–744.
- Pagan, A. and F. Vella (1989), Diagnostic Tests for Models Based on Individual Data: A Survey, Journal of Applied Econometrics, 4, S29–S59.
- Pratt, J. W. (1981), Concavity of the Log-Likelihood, Journal of the American Statistical Association, 76, 137–159.
- Pregibon, D. (1981), Logistic Regression Diagnostics, Annals of Statistics, 9, 705–724.
- Puhani, P. A. (2000), The Heckman Correction for Sample Selection and Its Critique, Journal of Economic Surveys, 14, 53–67.
- Rossi, P. E. and G. M. Allenby (1993), A Bayesian Approach to Estimating Household Parameters, Journal of Marketing Research, 30, 171–182.
- Roy, R., P. K. Chintagunta, and S. Haldar (1996), A Framework for Investigating Habits, ‘‘The Hand of the Past’’ and Heterogeneity in Dynamic Brand Choice, Marketing Science, 15, 208–299.
- Schwarz, G. (1978), Estimating the Dimension of a Model, Annals of Statistics, 6, 461–464.
- Sinha, I. and W. S. DeSarbo (1998), An Integrated Approach toward the Spatial Modeling of Perceived Customer Value, Journal of Marketing Research, 35, 236–249.
- Tauchen, G. E. (1985), Diagnostic Testing and Evaluation of Maximum Likelihood Methods, Journal of Econometrics, 30, 415–443.
- Tobin, J. (1958), Estimation of Relationships for Limited Dependent Variables, Econometrica, 26, 24–36.
- van Heerde, H. J., P. S. H. Leeflang, and D. R. Wittink (2000), The Estimation of Pre- and Postpromotion Dips with Store-Level Scanner Data, Journal of Marketing Research, 37, 383–395.
- Veall, M. R. and K. F. Zimmermann (1992), Performance Measures from Prediction–Realization Tables, Economics Letters, 39, 129–134.
- Verbeek, M. (2000), A Guide to Modern Econometrics, Wiley, NewYork.
- Vilcassim, N. J. and D. C. Jain (1991), Modeling Purchase-Timing and BrandSwitching Behavior Incorporating Explanatory Variables and Unobserved Heterogeneity, Journal of Marketing Research, 28, 29–41.
- Wedel, M. and W. A. Kamakura (1999), Market Segmentation: Conceptual and Methodological Foundations, International Series in Quantitative Marketing, Kluwer Academic Publishers, Boston.
- White, H. (1980), A Heteroskedasticity-Consistent Covariance Matrix Estimator and a Direct Test for Heteroskedasticity, Econometrica, 48, 817–828.
- Windmeijer, F. A. G. (1995), Goodness-of-Fit Measures in Binary Response Models, Econometric Reviews, 14, 101–116.
- Wooldridge, J. M. (2000), Introductory Econometrics: A Modern Approach, SouthWestern College, Cincinnati.
- Zemanek, J. E. (1995), HowSalespersons Use of a Power Base can Affect Customers’ Satisfaction in a Social System – An Empirical Examination, Psychological Reports, 76, 211–217.




