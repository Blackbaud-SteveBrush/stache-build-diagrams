(function (GitGraph) {
    'use strict';

    var deploy,
        feature,
        graph,
        master,
        template;

    template = new GitGraph.Template({
        branch: {
            color: "#000000",
            lineWidth: 3,
            spacingX: 60,
            mergeStyle: "bezier",
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

    master.commit({
        message: 'Initial commit',
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
        feature,
        graph,
        master,
        release,
        template;

    template = new GitGraph.Template({
        branch: {
            color: "#000000",
            lineWidth: 3,
            spacingX: 60,
            mergeStyle: "bezier",
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
        elementId: 'git-graph',
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
        column: 3
    });
    deployTest.commit({
        message: "Initial commit",
        messageDisplay: false
    });
    deployProd = master.branch({
        name: 'deploy-prod',
        column: 4
    });
    deployProd.commit({
        message: "Initial commit",
        messageDisplay: false
    });

    master.commit({
        message: 'Initial commit',
        messageDisplay: false
    });

    feature = master.branch({
        name: 'feature',
        column: 2
    });
    feature.commit({
        message: 'Updated tutorial'
    });
    feature.merge(master, {
        author: 'UserEd',
        message: '[Pull Request] Merge branch `feature` into `master`'
    });
    master.merge(deployTest, {
        author: 'Travis-CI',
        message: "[Trigger deploy to test]"
    });
    feature.delete();

    changelog = master.branch({
        name: 'changelog',
        showLabel: true,
        column: 2
    });
    changelog.commit('Added endpoints and breaking change');
    changelog.merge(master, {
        author: 'UserEd',
        message: '[Pull Request] Merge branch `changelog` into `master`'
    });
    master.merge(deployTest, {
        author: 'Travis-CI',
        message: "[Trigger deploy to test]"
    });
    changelog.delete();

    release = master.branch({
        name: 'release',
        column: 2
    });
    release.commit({
        author: 'UserEd',
        message: 'Release',
        tag: 'v1.0.0',
        dotColor: 'red'
    });
    release.merge(master, {
        author: 'UserEd'
    });
    master.merge(deployTest, {
        author: 'Travis-CI',
        message: "[Trigger deploy to test]"
    });
    master.merge(deployProd, {
        author: 'Travis-CI',
        message: "[Trigger deploy to prod]"
    });
    release.delete();

}(window.GitGraph));


(function (GitGraph) {
    'use strict';

    var deployProd,
        deployTest,
        graph,
        hotfix,
        master,
        template;

    template = new GitGraph.Template({
        branch: {
            color: "#000000",
            lineWidth: 3,
            spacingX: 60,
            mergeStyle: "bezier",
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

    deployTest = master.branch({
        name: 'deploy-test',
        column: 2
    });
    deployTest.commit({
        message: "Initial commit",
        messageDisplay: false
    });
    deployProd = master.branch({
        name: 'deploy-prod',
        column: 4
    });
    deployProd.commit({
        message: "Initial commit",
        messageDisplay: false
    });



    hotfix = deployProd.branch({
        name: 'hotfix',
        column: 3
    });
    hotfix.commit({
        message: 'Fixed issue with production'
    });
    hotfix.merge(deployProd, {
        author: 'Travis-CI',
        message: "[Trigger deploy to prod]"
    });
    hotfix.merge(master);

    master.merge(deployTest, {
        author: 'Travis-CI',
        message: "[Trigger deploy to test]"
    });

}(window.GitGraph));
