# Essays and Forums

## Essays

### Essay: Is AI Real Intelligence That Is Artificial?

This essay explored the intersection of tech and philosphy, and it did so by wondering if AI is real intelligence that i artificial. As part of the essay, opposing views had to be considered, so key points across the spectrum were considered. 

**Key points I argued:**
- *AI _is_ true intelligence*. It involves socio-linguistic programming, adheres to institutional ideals, and rejects the idea that intelligence resides as a single unit. 
- *AI lacks true human intelligence*. AI inherently lacks the ability to create, along with the internal drive and passion that fuels human creativity. While it can be trained to recognize and mimic inherently human emotional patterns, it is lacking emotional intelligence. 
- *The debate highly depends on the definition of intelligence*. At best, intelligence should be positioned as a spectrum because there is no one "true" definition. AI should thus be considered a complementary extension of human intelligence. 

The full essay can be found [here](https://drive.google.com/file/d/1qbEfXsi7ReGmw-Uwx8-n7YzAEZzfARTV/view?usp=sharing).

This essay explored AI across three ethical schools of thought: virtue ethics, consequentialism, and deontology, and its impact on different domains. The main thesis of this essay agreed upon by the authors was that technological advancement must be bound by moral duties and prevent systemic exploitation. 

**Key reflection of this essay**

Analyzing these shifts through deontological ethics was uniquely challenging because job and labor markets are inextricably linked to complex historical, social, and economic realities. We cannot ignore how institutional biases like racism interact with market forces, creating a high risk of exacerbating current income inequality. Ultimately, while AI is a powerful tool, its deployment cannot happen unchecked. Governments have a strict moral duty to implement responsible guardrails and support displaced workers, ensuring they have access to the training and resources required to navigate and succeed in an automated economy.

The full essay can be found [here](https://drive.google.com/file/d/1OyNQCPXoZ_FIxm5OMSk6hU9DiclUnwbR/view?usp=sharing).

## Forum Contributions


### Forum: What is intelligence?


As I researched authoritative sources that aimed to define intelligence, one thing appeared to be quite clear: there is no general, or “global” definition, of intelligence. In fact, Goertzel and Wang (2007) went so far as to compile a list of seventy definitions of intelligence, all grouped by discipline–for example, general consensus, psychological, philosophical definitions, among others. Among many of the definitions in dictionaries in encyclopedias, I noticed that intelligence was mostly defined as an “ability”. For example, the Compact Oxford English Dictionary (2006) plainly defines intelligence as “the ability to acquire and apply knowledge and skills.” The World Book Encyclopedia (2006) presents a definition that I found quite interesting, as they defined intelligence as “the ability to adapt to the environment.” 

Psychological definitions of intelligence were much more varied. In 1923, psychologist Edwin Boring defined intelligence as what is measured by intelligence tests. Definitions such as R.E. Snow’s is much more intersectional: “Intelligence is part of the internal environment that shows through the interface between person and external environment as a function of cognitive task demands (Statter, 2001). 

However, no definition of intelligence would be complete without considering its philosophical roots–and, in fact, some researchers have used LLMs as sparring partners to explore this very concept. One such example is Escobedo’s article titled “A Philosophical Dialogue on the Nature of Intelligence”, in which he engaged with ChatGPT-4o to define intelligence. Based purely on the style of Scholastic Philosophy, it defined intelligence as “the faculty of the rational soul by which the mind apprehends, abstracts, and discerns truth through the synthesis of sensory experience and universal principles, enabling adaptation, judgement, and purposive action in accordance with reason.”

It is quite fascinating to see how such an abstract topic is defined by different fields, and I am quite curious to learn how these definitions are applied to artificial intelligence. 

References: 

Legg, S., & Hutter, M. (2007). A collection of definitions of intelligence. In B. Goertzel & P. Wang (Eds.), Advances in Artificial General Intelligence: Concepts, Architectures and Algorithms - Proceedings of the AGI Workshop 2006 (pp. 17–24). IOS Press. https://doi.org/10.48550/arxiv.0706.3639

Boring, E. G. (1923, June 6). Intelligence as the tests test it. New Republic, 12, 35–37.

Statter, A. J. (2001). Measuring the Performance and Intelligence of Systems: Proceedings of the 2001 PerMIS Workshop. National Institute of Standards and Technology. https://www.nist.gov/system/files/documents/el/isd/ks/PerMIS_2001_Full_Proceedings.pdf

Escobedo Casillas, S. D. (2024). A philosophical dialogue on the nature of intelligence. PhilArchive. https://philarchive.org/archive/ESCAPD

### Forum: PEAS for Agents


I am deeply interested in observability; gathering metrics, analyzing data, and identifying pain points in different processes. That is, in part, why I study Industrial Engineering. However, my main interest is seeing how this translates to software engineering metrics in practice, and that is why I am building an agent to do this in my free time. The function I wish to optimize is the cycle time of a feature from branch creation to production deployment, by providing post-deployment recommendations to engineering leads and product owners. 

Since this agent ingests data from a specific time range, it operates within a fully observable environment. Its sensors–elements such as webhooks, API calls, or commits–would provide it the full state of the environment at the moment of analysis, and no change would be necessary by the time the agent makes a recommendation on a specific pain point within a process.  However, by nature it is stochastic because there may be many dynamic elements in the environment; anything from a developer losing access to their machine to an infrastructure outage, as these factors would affect cycle time. The actuator for this agent would be an automated advisory interface—such as a Slack or Teams bot or integrated PR comment system—which closes the loop by injecting prescriptive nudges directly into the team’s workflow to transform observability data into reduced cycle time. 



