const HeadModels = [
    {
        "name": "head",
        "rarity": "head1",
        "image": "iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAexAAAHsQEGxWGGAAAF8WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTAzLTI4VDE0OjUxOjA3KzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTAzLTI4VDE0OjUxOjA3KzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wMy0yOFQxNDo1MTowNyswOTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpkZDhlYzhmMC01ODkzLTJkNGEtODdlNi03Yzc1YmIzYzNiNDAiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpjZGRkODNmMS1kZTNiLTZlNGUtYWEyMi1mOTVjOGM0MzYwMWIiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2ZjA4YzBlYS0yMmRkLTU0NGQtYmEyMC1iYjgzMzJiM2I2MjQiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjZmMDhjMGVhLTIyZGQtNTQ0ZC1iYTIwLWJiODMzMmIzYjYyNCIgc3RFdnQ6d2hlbj0iMjAyMi0wMy0yOFQxNDo1MTowNyswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpkZDhlYzhmMC01ODkzLTJkNGEtODdlNi03Yzc1YmIzYzNiNDAiIHN0RXZ0OndoZW49IjIwMjItMDMtMjhUMTQ6NTE6MDcrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6/oSAAAAABi0lEQVRo3t2av2rCUBSHQ3HoIk76Fg6ODi0UJ5eCg0/g5Btk7eILOHRzCIKbo38moSh9A3HMLI4FB8H0VzgHrFhJkxjv+Q0fQsi993yg5uSc4y0/HrwMKIMm8EEAViAEX+Aon6FcD+S+pqxLfX4URV6aDR5BC7yDDYgSsJH1LdkvV5Ei6IBpwuD/Yir7FvMQeQXjjAXOGcs5NxGpgDewvbGEspXzKlmK1MAwJ4FzhnJ+apFnML+ThDKXOBKLPIHFnSWUhcTzb5EqmDgioUwkrtgiJTBwTEIZSHyxRHxHJRQ/jkhDUgmXRUKJ86pI4LiEElwTaUuCZ0HkKPFeFBkZkVBGl0RewN6YyF7i/iXSMyah9E5FCuDTqMhP3AUVqRuVUOoq0jUu0lWRvnGRvorMjIvMVGRtXGStIjvjIjsVORgXOdCJ0Hy1aH7sNH+/NA9EmhSFJmmkSeNpXqyoXnVpig9U5SCaAh1VyZSmiE3VVqBp9FC13qiaoVTtaaqBAaoRDrqhGqoxJycHz74BJJC6IRQ8A2gAAAAASUVORK5CYII="
    },
    {
        "name": "head",
        "rarity": "head2",
        "image": "iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAexAAAHsQEGxWGGAAAF8WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTAzLTI4VDE0OjU2OjQ3KzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTAzLTI4VDE0OjU2OjQ3KzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wMy0yOFQxNDo1Njo0NyswOTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDphMGNjODgzYy0yMTk2LWZlNGYtYTJmYi1kMGQ0NWJhZjg4ZDAiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoyYTZiZDE3Ny03MmZjLTlmNDAtYTdiOS0xYjI5YzM3MTc2YWMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplZmJjNWUzNi04YWM3LTZkNGQtOTA0YS04Y2JmOTAwN2I1YmIiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmVmYmM1ZTM2LThhYzctNmQ0ZC05MDRhLThjYmY5MDA3YjViYiIgc3RFdnQ6d2hlbj0iMjAyMi0wMy0yOFQxNDo1Njo0NyswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphMGNjODgzYy0yMTk2LWZlNGYtYTJmYi1kMGQ0NWJhZjg4ZDAiIHN0RXZ0OndoZW49IjIwMjItMDMtMjhUMTQ6NTY6NDcrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7bYztuAAACLklEQVRo3t2aSyhEURjHJ1KyGimPMivRkKlRY0bII4/ySOMRhjDlnaa8F6IUSZLXQo1SYyU2drKQmsjewkZJFjZGKTYkrvO/5ijT0DzNPd/ia5p77znf79fcufc7D1WU+kwVbHT2DGgb28ZmKutmj4zFa9cZOY6npLSDt7jkYyk6/lTCJ77jOM7jOlyPdqHIL0mSKuDG3YPdanPr5GJ++fJlqnb/lR2T/A20Q3v0g/7+VaSrtz+ltmnKoTPZXYHA/xboD/2i/7CL1Fsm5vUFm3ehFPAM9I88YRFh93JWWc2cU605fA+nBA/kQT7kDZmIxWqz5Bav3/yHgGcgL/IHLdLcMWzLNm49REKCB/KDI2AR1ngo07D9GEkJHuAAj98i7Ods0OXZ75Ug8f1UYzzg8lnE2tenMZWuXilJgge4wOeTCN66SpTg4eb7W6SpfXQcpYSSRcAHzj9FUAcpWYKHm9O7iLllcgUFnggi4ASvVxFD0catCBI83Lw/Rdg9NxKbeCKJJAJecP8QKalaOBdJgoeb+0uEjQNi0/U7zyKKgBv8sgh79feKKMED/LJIdcP0rsgi4JdFCiuWLkQWAb8swspkl8gi4JdFNNq9F5FFwC+LsGHlh8gi4JdFYhKcksgi4KclQubWIvNnJ/P4JfNCJFOikCkayZTxZAZWpIa6ZCYfSE0HkZmgIzVlSmYSm9SyApmFHlJLb6QWQ0ktT5PaMEBqCwe5TTWktjkpdePZJ2G/WDffiwL9AAAAAElFTkSuQmCC"
    },
    {
        "name": "head",
        "rarity": "head3",
        "image": "iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAexAAAHsQEGxWGGAAAF8WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTAzLTI4VDE0OjU5OjMwKzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTAzLTI4VDE0OjU5OjMwKzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wMy0yOFQxNDo1OTozMCswOTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozZDE2MzkwMS1lNTAyLTIwNGItYWRjMi1mMGFlOTQ1NjgxZmIiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpkMjhhYWYwZS0zMGQyLTA1NDQtYjhiZS1mOGY5ZTMxZjAwMmYiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5M2M4N2JhMS0xYjA1LTNkNDAtOTcyZC1iOTA4NjU3YmE4MDciIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjkzYzg3YmExLTFiMDUtM2Q0MC05NzJkLWI5MDg2NTdiYTgwNyIgc3RFdnQ6d2hlbj0iMjAyMi0wMy0yOFQxNDo1OTozMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDozZDE2MzkwMS1lNTAyLTIwNGItYWRjMi1mMGFlOTQ1NjgxZmIiIHN0RXZ0OndoZW49IjIwMjItMDMtMjhUMTQ6NTk6MzArMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4fDbKDAAACIklEQVRo3t2aS0tCQRTH/QDtg5tQRg8yKoIiMns/xKz0zjdp2SdoV1pqD1qELaKigugBQbQKohbtojZRENQigqgIS5z8Tw6UpOQr75zFQbzeOef3A++9586M6V6rMWUbXqduC7az0GKj53K9yvV8UNobOStp5VdaA7/TrOIT33Ecv+M8nI9xuajPOTdlPNg37C6eaWMbKzXDjydmezR2jKcbGIfxyIN8/yoy6dIr51v0o91yRzgT+GSBfMiL/HkXCdrZ6laF8y2XAomB/KiTFxGfU7eHGtzX51ozz6eEDNRBPdTNmch0HxuLXaAv/yGQGKiL+lmLBLp0755l4L0QEjJQHxwZi8QGT+yX9X8UUkIGOMCTtshUHxvdyfFdKdsAD7j+LOJzeaxr1UNPRpKQAS7w/UkET10jSsiI86UWCXSwObQSRhYBHzhTiqAPMrLEt9vyc1KRWRvbRoOnggg4wfuryGbl4KsKEjLivD9F/J0scKPVc5VEwAvuHyJLde5blSRkxLm/RCbdnqLD0p6IiiLgBr8Q8XezcRUlZIBfiCw066cqi4BfiCxbRx5UFgG/ENmzGKs5TL/Nd4SFyLG5PaqyCPiFyIXWxFUWAb8QudVqlRYBPy0RMn8tMhc7mdsvmQcimRaFTNNIpo0n82JF6lWXzOQDqekgMhN0pKZMyUxik1pWILPQQ2rpjdRiKKnlaVIbBkht4SC3qYbUNiejbjz7BIucaEANvQN+AAAAAElFTkSuQmCC"
    }
]
export default HeadModels;