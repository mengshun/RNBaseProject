//
//  ViewController.m
//  RNProject
//
//  Created by mengshun on 2022/8/8.
//

#import "ViewController.h"
#import <React/RCTRootView.h>

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    self.title = @"首页";
}

- (IBAction)nextAction:(id)sender {
    
    NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.bundle?platform=ios"];
    
    RCTRootView *rootView =
    [[RCTRootView alloc] initWithBundleURL: jsCodeLocation
                                moduleName: @"RNHighScores"
                         initialProperties:
     @{
        @"scores" : @[
            @{
                @"name" : @"Alex",
                @"value": @"42"
            },
            @{
                @"name" : @"Joel",
                @"value": @"10"
            }
        ]
    }
                             launchOptions: nil];
    UIViewController *vc = [[UIViewController alloc] init];
    vc.view = rootView;
    [self.navigationController pushViewController:vc animated:YES];
    
}

@end
