<template>
    <NavigationBar/>
    <div class="lessonsquiz" style="margin-left: 78px;">
        <h1>This is the Lessons Quiz Page.</h1>
        <div>
            Quiz 1: How inflation works!<br>
            <p>
                <ol>
                    <li>What is the cause of your money losing value over time?
                        <ol>
                            <li>Inflation</li>
                            <li>Deflation</li>
                            <li>Inhalation</li>
                            <li>Exhalation</li>
                        </ol>
                    </li>
                    <li>
                        What is the common rate of inflation?
                        <ol>
                            <li>0 - 0.5%</li>
                            <li>2 - 2.5%</li>
                            <li>5 - 6%</li>
                            <li>10 - 15%</li>
                        </ol>
                    </li>
                    <li>
                        If you put $1000 under your mattress, how much is it's monetary value in 10 years time?
                        <ol>
                            <li>$1000</li>
                            <li>$1000 * interest rate</li>
                            <li>$1000 / interest rate</li>
                            <li>$0</li>
                        </ol>
                    </li>
                    <li>
                        Which of these statements is an example of inflation in action?
                        <ol>
                            <li>A cup of coffee in 1970 is worth $0.25. Now it is worth $1.59 in 2022.</li>
                            <li>A bowl of noodles is $3.50. When I ask for extra noodles, the bowl now costs $4.00.</li>
                            <li>Another entry</li>
                            <li>Another entry</li>
                        </ol>
                    </li>
                    <li>
                        Where should I keep my savings to make sure my money doesn't lose its value?
                        <ol>
                            <li>Savings/Investment account</li>
                            <li>Under my mattress</li>
                        </ol>
                    </li>
                </ol>
            </p>
        </div>

        <div>
            Quiz 2: How to curb inflation!<br>
            <p>
                <ol>
                    <li>With a savings account with interest of 2.5% per annum, and if inflation is at 2.5%, will my savings lose its value?
                        <ol>
                            <li>Yes</li>
                            <li>No</li>
                        </ol>
                    </li>
                    <li>
                        Is investment the same as interest?
                        <ol>
                            <li>Yes</li>
                            <li>No</li>
                        </ol>
                    </li>
                    <li>
                        Is having a savings account enough?
                        <ol>
                            <li>Yes, it's enough!</li>
                            <li>No, we can consider investing too to make our money work itself!</li>
                        </ol>
                    </li>
                </ol>
            </p>
        </div>

        <div>
            Quiz 3: Why just a savings account is insufficient<br>
            <p>
                <ol>
                    <li>Q1
                        <ol>
                            <li>Yes</li>
                            <li>No</li>
                        </ol>
                    </li>
                    <li>
                        Q2
                        <ol>
                            <li>Yes</li>
                            <li>No</li>
                        </ol>
                    </li>
                    <li>
                        Q3
                        <ol>
                            <li>Yes</li>
                            <li>No</li>
                        </ol>
                    </li>
                </ol>
            </p>
        </div>

        <div>
            Quiz 4: What is an investment?<br>
            <p>
                <ol>
                    <li>Q1
                        <ol>
                            <li>Yes</li>
                            <li>No</li>
                        </ol>
                    </li>
                    <li>
                        Q2
                        <ol>
                            <li>Yes</li>
                            <li>No</li>
                        </ol>
                    </li>
                    <li>
                        Q3
                        <ol>
                            <li>Yes</li>
                            <li>No</li>
                        </ol>
                    </li>
                </ol>
            </p>
        </div>

        <div>
            Quiz 5: When should I get started?<br>
            <p>
                <ol>
                    <li>Q1
                        <ol>
                            <li>Yes</li>
                            <li>No</li>
                        </ol>
                    </li>
                    <li>
                        Q2
                        <ol>
                            <li>Yes</li>
                            <li>No</li>
                        </ol>
                    </li>
                    <li>
                        Q3
                        <ol>
                            <li>Yes</li>
                            <li>No</li>
                        </ol>
                    </li>
                </ol>
            </p>
        </div>
    </div>
</template>

<script>
    import NavigationBar from '../components/NavigationBar.vue';
    export default 
    {
        name: 'LessonsQuizPage',
        components: { NavigationBar },
        props: 
        {
    
        }
    }
</script>