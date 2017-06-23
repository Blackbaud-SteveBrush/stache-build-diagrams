(function (GitGraph) {
    'use strict';

    var deploy,
        feature,
        graph,
        master,
        template;

    template = new GitGraph.Template({
        arrow: {
            size: 10,
            offset: 1
        },
        branch: {
            color: "#000000",
            lineWidth: 3,
            spacingX: 60,
            mergeStyle: "straight",
            showLabel: true,
            labelFont: "normal 10pt Arial"
        },
        commit: {
            spacingY: -30,
            dot: {
                size: 8,
                strokeColor: "#000000",
                strokeWidth: 4
            },
            tag: {
                font: "normal 10pt Arial",
                color: "yellow"
            },
            message: {
                color: "black",
                font: "normal 12pt Arial",
                displayBranch: false,
                displayHash: false,
            }
        }
    });

    graph = new GitGraph({
        author: 'Stache User',
        elementId: 'git-graph-basic',
        template: template
    });

    master = graph.branch({
        name: 'master',
        column: 1
    });

    master.commit({
        message: 'Initial commit',
        messageBranchDisplay: false,
        messageHashDisplay: false
    });

    deploy = master.branch({
        name: 'deploy',
        column: 3
    });
    deploy.commit({
        message: "Initial commit",
        messageDisplay: false
    });

    feature = master.branch({
        name: 'feature',
        column: 2
    });
    feature.commit('Made it better');
    feature.merge(master);
    master.merge(deploy, {
        author: 'Travis-CI',
        message: "[Trigger deploy]"
    });
    feature.delete();

}(window.GitGraph));

(function (GitGraph) {
    'use strict';

    var changelog,
        deployProd,
        deployTest,
        develop,
        feature,
        graph,
        master,
        release,
        template;

    template = new GitGraph.Template({
        arrow: {
            size: 10,
            offset: 1
        },
        branch: {
            color: "#000000",
            lineWidth: 3,
            spacingX: 60,
            mergeStyle: "straight",
            showLabel: true,
            labelFont: "normal 10pt Arial"
        },
        commit: {
            spacingY: -30,
            dot: {
                size: 8,
                strokeColor: "#000000",
                strokeWidth: 4
            },
            tag: {
                font: "normal 10pt Arial",
                color: "yellow"
            },
            message: {
                color: "black",
                font: "normal 12pt Arial",
                displayBranch: false,
                displayHash: false,
            }
        }
    });

    graph = new GitGraph({
        author: 'Engineer',
        elementId: 'git-graph-test',
        template: template
    });

    master = graph.branch({
        name: 'master',
        column: 1
    });

    master.commit({
        author: 'UserEd',
        message: 'Initial commit',
        messageBranchDisplay: false,
        messageHashDisplay: false
    });

    deployTest = master.branch({
        name: 'deploy-test',
        column: 4
    });
    deployTest.commit({
        message: "Initial commit",
        messageDisplay: false
    });

    develop = master.branch({
        name: 'develop',
        column: 2
    });
    develop.commit({
        message: "Initial commit",
        messageDisplay: false
    });

    master.commit({
        message: 'Initial commit',
        messageDisplay: false
    });

    feature = develop.branch({
        name: 'feature',
        column: 3
    });
    feature.commit({
        message: 'Updated tutorial'
    });
    feature.merge(develop, {
        author: 'UserEd',
        message: '[Pull Request] Merge branch `feature` into `develop`'
    });
    develop.merge(deployTest, {
        author: 'Travis-CI',
        message: "[Trigger deploy to test]"
    });
    feature.delete();

    changelog = develop.branch({
        name: 'changelog',
        showLabel: true,
        column: 3
    });
    changelog.commit('Added endpoints and breaking change');
    changelog.merge(develop, {
        author: 'UserEd',
        message: '[Pull Request] Merge branch `changelog` into `develop`'
    });
    develop.merge(deployTest, {
        author: 'Travis-CI',
        message: "[Trigger deploy to test]"
    });
    changelog.delete();

}(window.GitGraph));

/* RELEASE */
(function (GitGraph) {
    'use strict';

    var changelog,
        deployProd,
        deployTest,
        develop,
        feature,
        graph,
        master,
        release,
        template;

    template = new GitGraph.Template({
        arrow: {
            size: 10,
            offset: 1
        },
        branch: {
            color: "#000000",
            lineWidth: 3,
            spacingX: 60,
            mergeStyle: "straight",
            showLabel: true,
            labelFont: "normal 10pt Arial"
        },
        commit: {
            spacingY: -30,
            dot: {
                size: 8,
                strokeColor: "#000000",
                strokeWidth: 4
            },
            tag: {
                font: "normal 10pt Arial",
                color: "yellow"
            },
            message: {
                color: "black",
                font: "normal 12pt Arial",
                displayBranch: false,
                displayHash: false,
            }
        }
    });

    graph = new GitGraph({
        author: 'Engineer',
        elementId: 'git-graph-prod',
        template: template
    });

    master = graph.branch({
        name: 'master',
        column: 1
    });

    master.commit({
        author: 'UserEd',
        message: 'Initial commit',
        messageBranchDisplay: false,
        messageHashDisplay: false
    });

    deployProd = master.branch({
        name: 'deploy-prod',
        column: 5
    });
    deployProd.commit({
        message: "Initial commit",
        messageDisplay: false
    });
    deployTest = master.branch({
        name: 'deploy-test',
        column: 4
    });
    deployTest.commit({
        message: "Initial commit",
        messageDisplay: false
    });

    develop = master.branch({
        name: 'develop',
        column: 3
    });
    develop.commit({
        message: "Initial commit",
        messageDisplay: false
    });

    release = develop.branch({
        name: 'release',
        column: 2
    });
    release.commit({
        author: 'UserEd',
        message: 'Release',
        dotColor: 'red'
    });

    release.merge(develop, {
        author: 'UserEd'
    });
    develop.merge(deployTest, {
        author: 'Travis-CI',
        message: "[Trigger deploy to test]"
    });
    release.merge(master, {
        author: 'UserEd'
    });
    master.merge(deployProd, {
        author: 'Travis-CI',
        message: "[Trigger deploy to prod]"
    });
    release.delete();

}(window.GitGraph));

/* HOTFIX */
(function (GitGraph) {
    'use strict';

    var deployProd,
        deployTest,
        develop,
        graph,
        hotfix,
        master,
        template;

    template = new GitGraph.Template({
        arrow: {
            size: 10,
            offset: 1
        },
        branch: {
            color: "#000000",
            lineWidth: 3,
            spacingX: 60,
            mergeStyle: "straight",
            showLabel: true,
            labelFont: "normal 10pt Arial"
        },
        commit: {
            spacingY: -30,
            dot: {
                size: 8,
                strokeColor: "#000000",
                strokeWidth: 4
            },
            tag: {
                font: "normal 10pt Arial",
                color: "yellow"
            },
            message: {
                color: "black",
                font: "normal 12pt Arial",
                displayBranch: false,
                displayHash: false,
            }
        }
    });

    graph = new GitGraph({
        author: 'UserEd',
        elementId: 'git-graph-hotfix',
        template: template
    });

    master = graph.branch({
        name: 'master',
        column: 1
    });

    master.commit({
        author: 'UserEd',
        message: 'Initial commit',
        messageBranchDisplay: false,
        messageHashDisplay: false
    });
    deployProd = master.branch({
        name: 'deploy-prod',
        column: 5
    });
    deployProd.commit({
        message: "Initial commit",
        messageDisplay: false
    });
    deployTest = master.branch({
        name: 'deploy-test',
        column: 4
    });
    deployTest.commit({
        message: "Initial commit",
        messageDisplay: false
    });


    develop = master.branch({
        name: 'develop',
        column: 3
    });
    develop.commit({
        message: "Initial commit",
        messageDisplay: false
    });

    hotfix = master.branch({
        name: 'hotfix',
        column: 2
    });
    hotfix.commit({
        message: 'Fixed issue with production',
        dotColor: 'red'
    });
    hotfix.merge(develop);
    develop.merge(deployTest, {
        author: 'Travis-CI',
        message: "[Trigger deploy to test]"
    });
    hotfix.merge(master);
    master.merge(deployProd, {
        author: 'Travis-CI',
        message: "[Trigger deploy to prod]"
    });

}(window.GitGraph));
